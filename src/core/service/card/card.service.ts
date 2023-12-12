import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/template/credit/credit.component';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly URL_CARDS = "/assets/cards.json"

  constructor(private httpClient: HttpClient) { }

  listAllCards(): Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.URL_CARDS);
  }

  listAllNameCards(): Observable<String[]> {
    return this.httpClient.get<Card[]>(this.URL_CARDS).pipe(
      map(cards => cards.map(card => card.name))
    );
  }
}
