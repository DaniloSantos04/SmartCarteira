import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SummaryService } from 'src/core/service/summary/summary.service';


export interface Summary {
  month: number
  name: string
  year: number;
}

export interface SummaryDetails {
  month: number,
  year: number,
  financialResult: number,
  totalIncome: number,
  totalFixedExpenses: number,
  totalVariableExpenses: number,
  resources: resource[],
  fixeds: fixed[],
  variables: variable[]
}

export interface resource {
  descricao: string
  valor: number,
  data: string;

}

export interface fixed {
  descricao: string
  valor: number,
  data: string;

}

export interface variable {
  descricao: string
  valor: number,
  data: string;

}

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true,
  providers: [DatePipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class SummaryComponent implements OnInit {
  [x: string]: any;

  summarys: Summary[] = [];
  summaryDetails!: SummaryDetails;
  titleColumns: string[] = ['data', 'descricao', 'valor'];
  resources: resource[] = [];


  constructor(
    private datePipe: DatePipe,
    private summaryService: SummaryService) { }

  ngOnInit() {
    const hoje = new Date();

    for (let i = 0; i < 12; i++) {
      const data = new Date(hoje.getFullYear(), hoje.getMonth() + i, 1);
      const options: Intl.DateTimeFormatOptions = { month: 'long' };
      const monthName: string = new Intl.DateTimeFormat('pt-BR', options).format(data);

      const monthOrNull: string | null = monthName;


      if (monthOrNull !== null) {
        const summary: Summary = {
          month: data.getMonth() + 1,
          name: monthOrNull,
          year: data.getFullYear(),
        };
        this.summarys.push(summary);
      }
    }
    this.details(this.summarys[0]);
  }

  details(summary: Summary){
    console.log(summary);

    this.summaryService.findSummaryDetailsOfMonth().subscribe(
      data => {
        this.summaryDetails = data;
      },
      error => {
        console.error('Erro ao detalhes do resumo:', error);
      }
    );
  }

}
