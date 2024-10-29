import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

// Définir les interfaces pour les DTOs si nécessaire
interface CategoryDTO {
  id?: number;
  name: string;
  description?: string;
}

interface PieceDTO {
  id?: number;
  namePiece: string;
  description?: string;
  pieceState: string;
  quantity: number;
  dateAdded?: string;
  price: number;
  supplier: string;
  categoryId: number;
  antecedentId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = environment.BASIC_URL; // Utilisez l'URL de base définie dans votre fichier d'environnement

  private apiUrll = 'http://localhost:8089/category';

  constructor(private http: HttpClient) { }
  
  // Méthodes pour les catégories
  postCategory(categoryDTO: CategoryDTO): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/category/add`, categoryDTO);
  }

  listCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/category`);
  }

  getCategoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/category/${id}`);
  }

  updateCategory(id: number, category: CategoryDTO): Observable<any> {
    return this.http.put<any>(`${this.apiURL}/category/${id}`, category);
  }

  // Méthodes pour les pièces
  postPiece(pieceDto: PieceDTO): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/piece/post`, pieceDto);
  }

  getAllPieces(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/piece/all`);
  }

  // Méthode pour obtenir une pièce par ID
  getPieceById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/piece/${id}`);
  }

  logChange(categoryId: number, changeType: string, oldValue: string, newValue: string): Observable<any> {
    const params = { categoryId, changeType, oldValue, newValue };
    return this.http.post(`${this.apiUrll}/log`, null, { params });
  }

  getChangeLog(categoryId: number): Observable<any> {
    return this.http.get(`${this.apiUrll}/${categoryId}/log`);
  }
}
