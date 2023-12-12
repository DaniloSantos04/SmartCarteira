import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/core/service/cards.service';
import { CreditDialogComponent } from './credit-dialog/credit-dialog.component';

export interface Card {
  id: number,
  name: string
  duedate: string,
  image: string
  betterDay: string;
}


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
  cards: Card[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private cardsService: CardsService) {
      this.listAllCards();
    }

  ngOnInit() {

  }

  create(){
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  update(card: Card){
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, state: { card: card } });
  }

  delete(card: Card): void {
    console.log(card);
    this.dialog.open(CreditDialogComponent, {
      height: '172px',
      width: '400px',
      data: {
        cardData: card
      }
    });
  }

  private listAllCards(){
    this.cardsService.listAllCards().subscribe(datas => this.cards = datas)
  }

}
