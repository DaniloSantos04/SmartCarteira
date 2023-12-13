import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Shopping } from 'src/template/shopping/shopping.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private readonly URL_SHOPPINGS = "/assets/shoppings.json"

  constructor(private httpClient: HttpClient) { }

  listRecentPurchasesThisMonth(): Observable<Shopping[]>{
    return this.httpClient.get<Shopping[]>(this.URL_SHOPPINGS);
  }

}
