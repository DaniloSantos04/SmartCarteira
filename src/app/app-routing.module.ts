import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from 'src/template/credit/credit.component';
import { HomeComponent } from 'src/template/home/home.component';
import { ShoppingDetailsComponent } from 'src/template/shopping/shopping-details/shopping-details.component';
import { ShoppingComponent } from 'src/template/shopping/shopping.component';
import { SummaryComponent } from 'src/template/summary/summary.component';
import { CreditDetailsComponent } from './../template/credit/credit-details/credit-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'credit/create', component: CreditDetailsComponent },
  { path: 'credit/edit', component: CreditDetailsComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'shopping/create', component: ShoppingDetailsComponent },
  { path: 'shopping/edit', component: ShoppingDetailsComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
