import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Section } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly URL_MENUS = "/assets/menu.json"

  constructor(private httpClient: HttpClient) { }

  loadMenus(): Observable<Section[]>{
    return this.httpClient.get<Section[]>(this.URL_MENUS);
  }
}
