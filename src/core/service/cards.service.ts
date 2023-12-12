import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/template/credit/credit.component';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  allCards!: Observable<Card[]>;
  nameCards: String[] = [];


  private readonly URL_CARDS = "/assets/cards.json"

  constructor(private httpClient: HttpClient) { }

  listAllCards(){
    this.allCards = this.httpClient.get<Card[]>(this.URL_CARDS);
    return this.allCards;
  }

  listAllNameCards(): String[] {

    this.httpClient.get<Card[]>(this.URL_CARDS).subscribe(data => {
      this.nameCards = data.map(card => card.name);
    });
    return this.nameCards;
  }
}
