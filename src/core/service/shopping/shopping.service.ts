import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PaymentMethods, Shopping } from 'src/template/shopping/shopping.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private readonly URL_SHOPPINGS = "/assets/shoppings.json"
  private readonly URL_FORMA_PAGAMENTOS = "/assets/forma_pagamentos.json"

  constructor(private httpClient: HttpClient) { }

  listRecentPurchasesThisMonth(): Observable<Shopping[]>{
    return this.httpClient.get<Shopping[]>(this.URL_SHOPPINGS);
  }

  listPaymentMethodsByUser(): Observable<PaymentMethods[]>{
    return this.httpClient.get<PaymentMethods[]>(this.URL_FORMA_PAGAMENTOS);
  }

}
