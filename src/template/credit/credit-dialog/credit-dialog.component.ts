import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Card } from '../credit.component';



@Component({
  selector: 'app-credit-dialog',
  templateUrl: './credit-dialog.component.html',
  styleUrls: ['./credit-dialog.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
})
export class CreditDialogComponent implements OnInit {

  cardData: Card[] = [];
  card!: Card;


  constructor(
    public dialogRef: MatDialogRef<CreditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit() {
    this.card = this.data.cardData;
  }



  onCancel() {
    this.dialogRef.close();
    this.router.navigate(["credit"]);
    this.snackBar.open("Não vamos apagar o cartão, mas é fundamental manter o controle sobre ele! OK?!", 'OK', {
      duration: 7000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  onSubimit() {
    //TODO - substituir pelo metodo de deletar no back-end
    this.dialogRef.close();
    this.router.navigate(["credit"]);
    this.snackBar.open("Caiu fora! Removemos mais um vilão do nosso caminho!", '', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
