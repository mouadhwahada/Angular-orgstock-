import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PieceSale } from '../DTO/piece-sale.model';
import { SaleRequestDto } from '../DTO/sale-request.dto';

@Injectable({
  providedIn: 'root'
})
export class PieceSaleService {


  //private apiUrl=`${environment.BASIC_URLL}/piecesales`;

 // private apiUrlll = 'http://localhost:8089/piecesales';

 private apiUrl = 'http://localhost:8089/piecesale';

  constructor(private http: HttpClient) { }

  sellPiece(saleRequest: SaleRequestDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/sell`, saleRequest);
  }

  getAllSoldPieces():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/all`);
  }
  /*getSalesByClientCin(clientCin: string): Observable<PieceSale[]> {
    return this.http.get<PieceSale[]>(`http://localhost:8089/piecesales/client/${clientCin}`);
  }

  getSalesByClientCin(clientCin: string): Observable<PieceSale[]> {
    return this.http.get<PieceSale[]>(`${this.apiUrl}/client/${clientCin}`).pipe(
      catchError(error => {
        console.error('Get sales by client CIN error:', error);
        return throwError(error);
      })
    );
  }*/
/*
sellPiece(pieceId:number,quantitySold:number,clientCin:string):Observable<any>{
  const saleRequest= {pieceId, quantitySold , clientCin};
  return this.http.post(`${this.apiUrl}/sell`, saleRequest);
}*/

getSalesByClientCin(clientCin: string): Observable<PieceSale[]> {
  return this.http.get<PieceSale[]>(`${this.apiUrl}/client/${clientCin}`)
    .pipe(
      catchError(error => {
        console.error('Get sales by client CIN error:', error);
        return throwError(error);
      })
    );
}

/*
getSalesByClientCin(clientCin: string): Observable<any> {
  const url = `${this.apiUrlll}/client/${clientCin}`;
  return this.http.get(url);
}*/
}
