import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SummaryDetails } from 'src/template/summary/summary.component';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private readonly URL_SUMMARY_DEZ = "/assets/summary_details_dez.json"


  constructor(private httpClient: HttpClient) { }

  findSummaryDetailsOfMonth(): Observable<SummaryDetails>{
    return this.httpClient.get<SummaryDetails>(this.URL_SUMMARY_DEZ);
  }
}
