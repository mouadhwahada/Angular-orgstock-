import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateHistoryTreeRequest } from '../TreedTO/update-history-tree-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeeService {

  private baseUrl  = 'http://localhost:8089/history-tree';

  constructor(private http: HttpClient) {}

  updateHistoryTree(request: UpdateHistoryTreeRequest): Observable<any> {
    return this.http.put(`${this.baseUrl}/update`, request);
  }


 /* getHistoryTreeById(id: number): Observable<UpdateHistoryTreeRequest> {
    return this.http.get<UpdateHistoryTreeRequest>(`${this.baseUrl}/getById/${id}`);
  }*/
}
