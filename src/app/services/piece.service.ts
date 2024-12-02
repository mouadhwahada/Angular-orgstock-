import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piecedto } from '../DTO/piecedto.model';
import { PieceChangeLog } from '../DTO/PieceChangeLog.model';

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  

  private apiUrll = 'http://localhost:8089/pieces/sold'; // URL pour récupérer les pièces vendues
  
  private baseUrl = 'http://localhost:8089/piece'; // Remplacez par l'URL de votre backend

  private apiUrlll = 'http://localhost:8089/piece'; 
  
  private apiUrl='http://localhost:8089/';
 

  private baseeUrl = 'http://localhost:8089/piece'; // URL pour accéder aux logs de changement

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir les logs par ID de pièce
  getLogsByPieceId(pieceId: number): Observable<PieceChangeLog[]> {
    return this.http.get<PieceChangeLog[]>(`${this.baseeUrl}/by-piece-id/${pieceId}`);
  }

  // Méthode pour obtenir les logs par nom de pièce
  getLogsByPieceName(pieceName: string): Observable<PieceChangeLog[]> {
    return this.http.get<PieceChangeLog[]>(`${this.baseeUrl}/by-piece-name/${pieceName}`);
  }

  updatePiecee(pieceName: string, piecedto: Piecedto): Observable<any> {
    return this.http.put(`${this.baseUrl}/${pieceName}`, piecedto);
  }

  updatePieceee(pieceId: number, piecedto: Piecedto): Observable<any> {
    return this.http.put(`${this.baseUrl}/${pieceId}`, piecedto);
  }

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
/*
  listPieces():Observable<any>{
    return this.http.get(this.apiUrl + "piece")
  }

  updatePiece(id:number,piece :any):Observable<any>{
   return  this.http.put<any>(this.apiUrl + `piece/${id}`, piece)
  }

  getPiece(id:number):Observable<any>{
    return this.http.get<any>(this.apiUrl + "piece/" + id)
  }*/


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

   /* listCategories():Observable<any>{
      return this.http.get(this.apiUrl + "category");
    }*/
   //last one 22/07 9:51
   /*savePiece(pieceDto: PieceDto, categoryId: number): Observable<any> {
    const url = `${this.apiUrl}piece/add?categoryId=${categoryId}`;
    return this.http.post(url, pieceDto);
  }*/ 
   /* searchPiecesByNamePiece(NamePiece: string): Observable<any> {
      const url = `${this.apiUrl}piece/search/${NamePiece}`;
      return this.http.get<any>(url);    }

    getChangeLog(pieceId: number): Observable<any> {
      const url = `${this.apiUrl}piece/${pieceId}/log`;
      return this.http.get<any>(url);
    }*/


      listPieces(): Observable<Piecedto[]> {
        return this.http.get<Piecedto[]>(`${this.baseeUrl}/all`);
      }
    
       searchPiece(namePiece: string): Observable<Piecedto[]> {
    return this.http.get<Piecedto[]>(`${this.apiUrl}/search/${namePiece}`);
  }

  updatePiece(id: number, pieceDto: Piecedto): Observable<void> {
    return this.http.put<void>(`${this.apiUrlll}/${id}`, pieceDto);
  }
    
      getPiece(pieceId: number): Observable<Piecedto> {
        return this.http.get<Piecedto>(`${this.apiUrl}/${pieceId}`);
      }
    //  updatePiece(id: number, piece: any): Observable<any> {
     //   return this.http.put(`${this.apiUrl}piece/${id}`, piece);
     // }
    
    /*  getPiece(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}piece/${id}`);
      }*/
    
      logChange(pieceId: number, changeType: string, oldValue: string, newValue: string): Observable<any> {
        const params = new HttpParams()
          .set('pieceId', pieceId.toString())
          .set('changeType', changeType)
          .set('oldValue', oldValue)
          .set('newValue', newValue);
        return this.http.post(`${this.apiUrl}piece/log`, null, { params });
      }
    
      postPiece(pieceDto: any): Observable<any> {
        return this.http.post(`${this.apiUrl}piece/post`, pieceDto);
      }
    
      getChangeLog(pieceId: number): Observable<any> {
        return this.http.get(`${this.apiUrl}piece/${pieceId}/log`);
      }
    
      searchPiecesByNamePiece(namePiece: string): Observable<any> {
        return this.http.get(`${this.apiUrl}piece/search/${namePiece}`);
      }


  getSoldPieces(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrll);
  }
}
