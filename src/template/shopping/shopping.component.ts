import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingService } from 'src/core/service/shopping/shopping.service';
import { ShoppingDialogComponent } from './shopping-dialog/shopping-dialog.component';
import { MatDialog } from '@angular/material/dialog';


export interface Shopping {
  id: number,
  descricao: string
  valor: number,
  numeroParcela: number,
  formaPagamento: string
  dataCompra: string;
}

export interface PaymentMethods {
  id: number,
  name: string
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CdkTableModule,
    CommonModule,
    MatTooltipModule
  ]
})
export class ShoppingComponent implements OnInit {

  shoppings!: Observable<Shopping[]>;
  paymentMethods: PaymentMethods[] = [];
  titleColumns: string[] = ['data', 'descricao', 'valor', 'numeroParcela', 'formaPagamento', 'acao'];

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.shoppingService.listPaymentMethodsByUser().subscribe(
      data => {
        this.paymentMethods = data;
      },
      error => {
        console.error('Erro ao carregar formas de pagamento:', error);
      }
    );

    this.shoppings = this.shoppingService.listRecentPurchasesThisMonth();

  }

  findPaymentMethodById(id: number): string {
  let formaPagamento: string = id.toString();

  if (this.paymentMethods) {
    const foundPaymentMethod = this.paymentMethods.find(paymentMethod => paymentMethod.id === id);

    if (foundPaymentMethod) {
      formaPagamento = foundPaymentMethod.name;
    }
  } else {
    console.warn('A lista de formas de pagamento ainda não foi carregada.');
  }

  return formaPagamento;
  }

  insert(){
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  update(shopping: Shopping){
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, state: { shopping: shopping } });

  }

  delete(shopping: Shopping){
    this.dialog.open(ShoppingDialogComponent, {
      width: '350px',
      enterAnimationDuration: 1500,
      exitAnimationDuration: 1500,
      data: {
        shopping: shopping
      }
    });
  }


}
