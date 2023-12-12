import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CardsService } from 'src/core/service/cards.service';
import { Card } from '../credit.component';



@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {

  datas: number[] = [];
  cards: String[] = [];

  formCard = this.formBuilder.group({
    card: new FormControl<string>(''),
    dueDate: new FormControl<number>(0),
    betterDay: new FormControl<number>(0),
    name: new FormControl<string>('')
  });


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private cardsService: CardsService
    ) {
      this.cards.push(...this.loadCard());

      for (let i = 1; i <= 28; i++) {
        this.datas.push(i);
      };

      this.formCard.get('card')?.valueChanges.subscribe((value) => {
        if (value === 'outro') {
          this.formCard.get('name')?.setValidators([Validators.required]);
        } else {
          this.formCard.get('name')?.clearValidators();
        }

        this.formCard.get('name')?.updateValueAndValidity();
      });


   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const card = history.state.card;
      this.fillFormFromState(card);
    });

  }

  loadCard(): String[] {
    return this.cardsService.listAllNameCards();
  }

  private fillFormFromState(card: Card) {
    if (card) {
      this.formCard.setValue({
        name: card.name,
        dueDate: parseInt(card.duedate),
        betterDay: parseInt(card.betterDay),
        card: this.loadCard().some(cardData => card.name === cardData) ? card.name : 'outro'
      });
    }
  }

  onCancel() {
    this.location.back();
    this.snackBar.open("Ops! Parece que não houve mudanças! Vamos dar outra chance para o sucesso acontecer!", 'OK', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubimit() {
    console.log(this.formCard.value);
    //TODO - substituir pelo metodo de salvar no back-end
    this.location.back();
    this.snackBar.open("Salvei! Cartão guardado no cofrinho do sucesso financeiro!", '', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
