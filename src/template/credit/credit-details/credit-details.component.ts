import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



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

  formCard: FormGroup;
  datas: number[] = [];
  cards: string[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private location: Location
    ) {
      for (let i = 1; i <= 28; i++) {
        this.datas.push(i);
      };

      this.cards.push(...this.loadCard());

      this.formCard = this.formBuilder.group({
        name: [null, Validators.required],
        dueDate: [null],
        betterDay: [null],
        card: []
      });

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
  }

  loadCard(): string[] {
    const cardData: string[] = ['C6 Black', 'Digio'];
    return cardData;
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
