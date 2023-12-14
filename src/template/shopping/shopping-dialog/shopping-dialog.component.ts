import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Shopping } from '../shopping.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shopping-dialog',
  templateUrl: './shopping-dialog.component.html',
  styleUrls: ['./shopping-dialog.component.css']
})
export class ShoppingDialogComponent implements OnInit {

  shopping!: Shopping;

  constructor(
    public dialogRef: MatDialogRef<ShoppingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private snackBar: MatSnackBar

  ) { }

  ngOnInit() {
    this.shopping = this.data.shopping;
  }

  onCancel() {
    this.dialogRef.close();
    this.router.navigate(["shopping"]);
  }

  onSubimit() {
    //TODO - substituir pelo metodo de deletar no back-end
    this.dialogRef.close();
    this.router.navigate(["shopping"]);
    this.snackBar.open("Compra deletada com sucesso! Agora, " + this.shopping.descricao + " vai precisar convencer o orçamento a tirar férias. 😄", '', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
