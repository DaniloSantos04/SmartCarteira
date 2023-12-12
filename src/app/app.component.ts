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
    this.loadMenus();
  }

  toggleButon(){

    this.matdrawer.toggle();
  }

  redirectToPage(path: string) {
    this.router.navigate([path]);
  }

  private loadMenus(){
    this.menuService.loadMenus().subscribe(datas => this.menus = datas);
  }



}
