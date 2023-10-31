import { Component, ViewChild } from '@angular/core';

export interface Section {
  order: number,
  name: string
  path: string,
  component: string
  icone: string,
  nivel: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smartCarteira';
  @ViewChild("drawer")matdrawer:any;

  toggleButon(){
    console.log("OK!");
    this.matdrawer.toggle();
  }

  menus: Section[] = [
    {
      "order": 1,
      "name": "Inicio",
      "path": "home",
      "component": "HomeComponent",
      "icone": "home",
      "nivel": 0
  },
  {
    "order": 2,
    "name": "Painel",
    "path": "dashboard",
    "component": "DashboardComponent",
    "icone": "dashboard",
    "nivel": 3
  },
  {
    "order": 3,
    "name": "Cartões",
    "path": "credit",
    "component": "CreditComponent",
    "icone": "credit_card",
    "nivel": 0
  },
  {
    "order": 4,
    "name": "Faturas",
    "path": "invoice",
    "component": "InvoiceComponent",
    "icone": "receipt",
    "nivel": 0
  },
  {
    "order": 5,
    "name": "Compras",
    "path": "shopping",
    "component": "ShoppingComponent",
    "icone": "shopping_cart",
    "nivel": 0
  },
  ];



}
