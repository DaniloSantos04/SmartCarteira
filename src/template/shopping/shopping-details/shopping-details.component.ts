import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShoppingService } from 'src/core/service/shopping/shopping.service';

import { PaymentMethods, Shopping } from '../shopping.component';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {

  formaPagamentos: PaymentMethods[] = [];

  formShopping = this.formBuilder.group({
    data: new FormControl<Date>(new Date()),
    descricao: new FormControl<string>(''),
    valor: new FormControl<number>(0.00),
    numeroParcela: new FormControl(1, [Validators.required, Validators.min(1), Validators.pattern('^[1-9][0-9]*$')]),
    formaPagamento: new FormControl<string>('')
  });

  minDate!: Date;
  maxDate!: Date;

  constructor(
    private location: Location,
    private snackBar: MatSnackBar,
    private formBuilder: NonNullableFormBuilder,
    private shoppingService: ShoppingService,
    private activatedRoute: ActivatedRoute
  ) {
      this.maxDate = new Date();
      const twelveMonthsAgo = new Date(this.maxDate);
      twelveMonthsAgo.setMonth(this.maxDate.getMonth() - 12);
      this.minDate = twelveMonthsAgo;

    }

  ngOnInit() {


    this.shoppingService.listPaymentMethodsByUser().subscribe(
      data => {
        this.formaPagamentos = data;
      },
      error => {
        console.error('Erro ao formas de pagamentos.', error);
      }
    );

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const shopping = history.state.shopping;
      this.fillFormFromState(shopping);
    });
  }


  onCancel() {
    this.location.back();
    this.snackBar.open("Vitória! Cancelamos o cadastro da compra e celebramos uma despesas a menos. Foco e controle em alta!", '🏆', {
      duration: 7500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubimit() {
    //console.log(this.formCard.value);
    //TODO - substituir pelo metodo de salvar no back-end
    this.location.back();
    this.snackBar.open("Erramos, fomos moleques/molecas escapou uma compra sem querer. Agora, é hora de focar em quitar e seguir em frente com o planejamento!", '😞', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  private async fillFormFromState(shopping: Shopping) {
    if (shopping) {
        this.formShopping.setValue({
          data: new Date(shopping.dataCompra),
          descricao: shopping.descricao,
          valor: shopping.valor,
          numeroParcela: shopping.numeroParcela,
          formaPagamento: shopping.formaPagamento
        });
    }
  }

}
