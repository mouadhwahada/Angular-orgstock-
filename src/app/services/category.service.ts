import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

const BASIC_URL= environment['BASIC_URL'];
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL='http://localhost:8089/';


  constructor(private http:HttpClient) { }
  
  postCategory(categoryDTO:any):Observable<any>{
    return this.http.post<[]>(this.apiURL + "category/add",categoryDTO)
  }
  /* 
  saveCategory(category: any): Observable<any> {
    return this.http.post(this.apiURL + "category/add" , category);
  }*/
  listCategories():Observable<any>{
    return this.http.get(this.apiURL + "category");
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }

  postPiece(pieceDto:any):Observable<any>{
    return this.http.post<[]>(this.apiURL + "piece/post",pieceDto)
  }

  getAllPieces():Observable<any>{
    return this.http.get(this.apiURL + "piece/pieces");
  }

  updateCategory(id:number,category :any):Observable<any>{
    return  this.http.put<any>(this.apiURL + `category/${id}`, category)
   }
}
