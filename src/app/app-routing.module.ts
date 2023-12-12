import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditComponent } from 'src/template/credit/credit.component';
import { HomeComponent } from 'src/template/home/home.component';
import { CreditDetailsComponent } from './../template/credit/credit-details/credit-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'credit', component: CreditComponent },
  { path: 'credit/create', component: CreditDetailsComponent },
  { path: 'credit/edit', component: CreditDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
