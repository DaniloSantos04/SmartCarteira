import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/core/service/menu/menu.service';


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

  menus: Section[] = [];

  constructor(private router: Router,
    private menuService: MenuService) {
    this.menus = this.loadMenus();
  }

  toggleButon(){

    this.matdrawer.toggle();
  }

  redirectToPage(path: string) {
    this.router.navigate([path]);
  }

  private loadMenus(): Section[]{
    this.menuService.loadMenus().subscribe(datas => this.menus = datas)
    return [
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
      "name": "Recursos",
      "path": "resource",
      "component": "ResourceComponent",
      "icone": "monetization_on",
      "nivel": 0
    },
    {
      "order": 4,
      "name": "Cartões",
      "path": "credit",
      "component": "CreditComponent",
      "icone": "credit_card",
      "nivel": 0
    },
    {
      "order": 5,
      "name": "Faturas",
      "path": "invoice",
      "component": "InvoiceComponent",
      "icone": "receipt",
      "nivel": 0
    },
    {
      "order": 6,
      "name": "Compras",
      "path": "shopping",
      "component": "ShoppingComponent",
      "icone": "shopping_cart",
      "nivel": 0
    }
    ];

  }



}
