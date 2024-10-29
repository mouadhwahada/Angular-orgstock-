import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InterventionHistorydto } from '../DTO/intervention-history.dto';

@Injectable({
  providedIn: 'root'
})
export class InterventionHisotryServiceService {

  private apiUrl = 'http://localhost:8089/interventions';

  constructor(private http: HttpClient) { }


  createOrUpdateIntervention(interventionDTO: InterventionHistorydto, purchaseNumber: number): Observable<any> {
    const requestBody = {
      interventionDTO: interventionDTO,
      purchaseNumber: purchaseNumber
    };
    
    return this.http.post(`${this.apiUrl}/create-from-purchase-number`, requestBody);
  }
 /* createOrUpdateIntervention(interventionDTO: InterventionHistorydto, purchaseNumber: number): Observable<any> {
    const requestBody = {
      interventionDTO: interventionDTO,
      purchaseNumber: purchaseNumber
    };
    
    return this.http.post(`${this.apiUrl}/create-from-purchase-number`, requestBody);
  }*/

  listInterventions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  getAllHistoryTrees(): Observable<InterventionHistorydto[]> {
    return this.http.get<InterventionHistorydto[]>(`${this.apiUrl}/all`);
  }


  /*private apiUrl = 'http://localhost:8089/interventions';
  
  
  constructor( private http:HttpClient) { }*/

  /*createIntervention(intervention:InterventionHistoryDto):Observable<void>{
    return this.http.post<void>(this.apiUrl,intervention);
  }

  getInterventionsByPieceId(pieceId: number): Observable<InterventionHistoryDto[]> {
    return this.http.get<InterventionHistoryDto[]>(`${this.apiUrl}/piece/${pieceId}`);
  }*/
}
