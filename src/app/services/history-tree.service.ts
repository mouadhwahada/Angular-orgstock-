import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryTreeService {

  private apiUrl = 'http://localhost:8089/history-tree';
  private apiUrll = 'http://localhost:8089/history-tree/update';



  constructor(private http:HttpClient) { }


  listInterventions(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }

  /*updateHistoryTree(updateRequest: UpdateHistoryTreeRequest): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, updateRequest);
  }
}*/

getHistoryTree(clientCin: string, purchaseNumber: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${clientCin}/${purchaseNumber}`);
}



updateHistoryTreee(clientCin: string, purchaseNumber: number, updateRequest: UpdateHistoryTreeeRequest): Observable<any> {
  return this.http.put(`${this.apiUrll}/${clientCin}/${purchaseNumber}`, updateRequest);
}
}

/*export interface UpdateHistoryTreeRequest {
  clientCin: string;
  purchaseNumber: number;
  emplacementSource: string;
  reperationDate: string; // Utilisez un format ISO8601 pour les dates
  emplacementDestination: string;
  status: string; // Assurez-vous que le type correspond à celui attendu dans votre backend (par ex., 'Etat')
  observation: string; // Assurez-vous que le type correspond à celui attendu dans votre backend
}*/

export interface UpdateHistoryTreeeRequest {
  emplacementSource: string;
  reperationDate: string; // Utilisez un format ISO8601 pour les dates
  emplacementDestination: string;
  status: ' Functional' | 'Non_Functional'; // Replace with your actual enum values
  observation: 'Defective_to_be_checked'| 'Successful_repair' | 'Repair_Completed_tested_ok'; // Assurez-vous que le type correspond à celui attendu dans votre backend
}

