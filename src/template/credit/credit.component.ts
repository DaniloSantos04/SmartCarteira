import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditDialogComponent } from './credit-dialog/credit-dialog.component';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CreditComponent implements OnInit {

  //TODO - a imagem tem que ser salva em base64
  cards = [
    {
      name: 'Azul',
      duedate: '09',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRMYKv8fh4EOpqK0r4f4RWmLbC6XKX0dGEpAH_ghAxtF2PXmAYzQNMQnfWeqi0fTqsTn0&usqp=CAU',
      betterDay: '02'
    },
    {
      name: 'Gol',
      duedate: '15',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSc4wShYqZWqXopLWjJkgmjnWJ2BfmZb68PHlPS-pQG7wV3TJ6HscsO8OY3-_d4MmdAc&usqp=CAU',
      betterDay: '05'
    }
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  create(){
    console.log("create()");
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  update(card: any){

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CreditDialogComponent, {
      height: '172px',
      width: '400px',
    });
  }

}
