import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {

  constructor(private location: Location,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onCancel() {
    this.location.back();
    this.snackBar.open("Vitória! Cancelamos o cadastro da compra e celebramos uma despesas a menos. Foco e controle em alta!", 'OK', {
      duration: 7500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubimit() {
    //console.log(this.formCard.value);
    //TODO - substituir pelo metodo de salvar no back-end
    this.location.back();
    this.snackBar.open("Erramos, fomos moleques/molecas escapou uma compra sem querer. Agora, é hora de focar em quitar e seguir em frente com o planejamento!", '', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
