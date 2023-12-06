import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']/*,
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
  ]*/
})
export class CreditDetailsComponent implements OnInit {

  datas: number[] = [];
  cards: string[] = [];

  formCard = this.formBuilder.group({
    name: new FormControl<string>(''),
    dueDate: new FormControl<number>(0),
    betterDay: new FormControl<number>(0),
    card: new FormControl<string>('')
  });



  constructor(
    private formBuilder: NonNullableFormBuilder,
    private snackBar: MatSnackBar,
    private location: Location,
    private activatedRoute: ActivatedRoute
    ) {
      for (let i = 1; i <= 28; i++) {
        this.datas.push(i);
      };

      this.cards.push(...this.loadCard());

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

  loadCard(): string[] {
    const cardData: string[] = ['C6 Black', 'Digio', 'Gol'];
    return cardData;
  }

  private fillFormFromState(card: any) {
    console.log("fillFormFromState - start");
    console.log(card);
    if (card) {
      console.log("fillFormFromState - IF - start");
      console.log(card);

      this.formCard.setValue({
        name: card.name,
        dueDate: parseInt(card.duedate),
        betterDay: parseInt(card.betterDay),
        card: this.loadCard().some(cardData => card.name === cardData) ? card.name : 'outro'
      });
      console.log("fillFormFromState - IF - end");
    }
    console.log("fillFormFromState - end");
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
