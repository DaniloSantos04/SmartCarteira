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


export interface Shopping {
  id: number,
  descricao: string
  valor: number,
  numeroParcela: number,
  formaPagamento: string
  dataCompra: string;
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
  titleColumns: string[] = ['data', 'descricao', 'valor', 'numeroParcela', 'formaPagamento', 'acao'];

  constructor(
    private shoppingService: ShoppingService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.shoppings = this.shoppingService.listRecentPurchasesThisMonth();
  }

  insert(){
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  update(shopping: Shopping){
    console.log("Compra update!!");
  }

  delete(shopping: Shopping){
    console.log("Compra update!!");
  }


}
