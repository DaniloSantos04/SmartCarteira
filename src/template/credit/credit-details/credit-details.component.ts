import { Location, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    NgFor,
    MatTooltipModule
  ]
})
export class CreditDetailsComponent implements OnInit {
  @ViewChild('nomeCartao') nomeCartao!: ElementRef;

  datas: number[] = [];
  dataVencimento: number | null = null;
  melhorDataCompra: number | null = null;


  constructor(
    private snackBar: MatSnackBar,
    private location: Location
    ) {
      for (let i = 1; i <= 28; i++) {
        this.datas.push(i);
      }
   }

  ngOnInit() {
  }

  selecionarDataVencimento(event: any) {
    this.dataVencimento = event.value;
  }

  selecionarMelhorDiaCompra(event: any) {
    this.melhorDataCompra = event.value;
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
    //TODO - substituir pelo metodo de salvar no back-end
    const valorNome = this.nomeCartao.nativeElement.value;
    console.log('Valor digitado no campo Nome:', valorNome);
    console.log('Opção selecionada:', this.dataVencimento);

    this.location.back();
    this.snackBar.open("Salvei! Cartão guardado no cofrinho do sucesso financeiro!", '', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
