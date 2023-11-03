import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



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

  constructor(private router: Router) {}

  toggleButon(){

    this.matdrawer.toggle();
  }

  redirectToPage(path: string) {
    this.router.navigate([path]);
  }


  menus: Section[] = [
    {
      "order": 1,
      "name": "Inicio",
      "path": "/home",
      "component": "HomeComponent",
      "icone": "home",
      "nivel": 0
  },
  {
    "order": 2,
    "name": "Painel",
    "path": "/dashboard",
    "component": "DashboardComponent",
    "icone": "dashboard",
    "nivel": 3
  },
  {
    "order": 3,
    "name": "Cartão de Crédito",
    "path": "/credit",
    "component": "CreditComponent",
    "icone": "credit_card",
    "nivel": 0
  },
  {
    "order": 4,
    "name": "Faturas",
    "path": "/invoice",
    "component": "InvoiceComponent",
    "icone": "receipt",
    "nivel": 0
  },
  {
    "order": 5,
    "name": "Compras",
    "path": "/shopping",
    "component": "ShoppingComponent",
    "icone": "shopping_cart",
    "nivel": 0
  },
  ];



}
