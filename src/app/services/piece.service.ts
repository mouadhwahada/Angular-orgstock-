import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  private apiUrl='http://localhost:8089/';
  constructor( private http:HttpClient) { }


  /*
 savePiece(piece: any, categoryId: number): Observable<any> {
    return this.http.post(this.apiUrl + "piece/add" , piece);
  }*/
  /*  savePiece(piece: any, categoryId: number): Observable<any> {
      return this.http.post(this.apiUrl + `piece/add?categoryId=${categoryId}`, piece);
    }*/
   
   /* savePiece(pieceDto: PieceDto, categoryId: number): Observable<any> {
      return this.http.post(`${this.apiUrl}/piece/add?categoryId=${categoryId}`, pieceDto);
    }*/

/*
  savePiece(piece: PieceDto, categoryId: number): Observable<PieceDto> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<PieceDto>(`${this.apiUrl}add?categoryId=${categoryId}`, piece, { headers: headers });
  }*/
    /*savePiece(piece: PieceDto, categoryId: number): Observable<any> {
      const url = `${this.apiUrl}add?categoryId=${categoryId}`;
      return this.http.post(url, piece);
    }*/

  listPieces():Observable<any>{
    return this.http.get(this.apiUrl + "piece")
  }

  updatePiece(id:number,piece :any):Observable<any>{
   return  this.http.put<any>(this.apiUrl + `piece/${id}`, piece)
  }

  getPiece(id:number):Observable<any>{
    return this.http.get<any>(this.apiUrl + "piece/" + id)
  }


 /* logChange(pieceId: number, changeType: string, oldValue: string, newValue: string): Observable<any> {
    const url = `${this.apiUrl}piece/log`;
    return this.http.post(url, null, {
      params: {
        pieceId: pieceId.toString(),
        changeType: changeType,
        oldValue: oldValue,
        newValue: newValue
      }
    });
  }*/

 /* postPiece(categoryId:number, pieceDto:any):Observable<any>{
    return this.http.post<[]>(this.apiUrl + "piece/add" + categoryId , pieceDto)
    }*/

    listCategories():Observable<any>{
      return this.http.get(this.apiUrl + "category");
    }
   //last one 22/07 9:51
   /*savePiece(pieceDto: PieceDto, categoryId: number): Observable<any> {
    const url = `${this.apiUrl}piece/add?categoryId=${categoryId}`;
    return this.http.post(url, pieceDto);
  }*/ 
    searchPiecesByNamePiece(NamePiece: string): Observable<any> {
      const url = `${this.apiUrl}piece/search/${NamePiece}`;
      return this.http.get<any>(url);    }

    getChangeLog(pieceId: number): Observable<any> {
      const url = `${this.apiUrl}piece/${pieceId}/log`;
      return this.http.get<any>(url);
    }
}
