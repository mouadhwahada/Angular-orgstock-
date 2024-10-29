import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule } from '@angular/router';
import { PieceService } from '../../services/piece.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryService } from '../../services/category.service';

// Définir une interface pour les pièces
interface Piecedto {
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

@Component({
  selector: 'app-allpieces',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    RouterModule,
    NavbarComponent
  ],
  templateUrl: './allpieces.component.html',
  styleUrls: ['./allpieces.component.css']
})
export class AllpiecesComponent implements OnInit {

  size: NzButtonSize = 'large';
  pieces: Piecedto[] = [];  // Utiliser l'interface PieceDTO
  searchForm!: FormGroup;

  constructor(
    private category:CategoryService,
    private pieceService: PieceService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      NamePiece: [null]
    });
    this.getAllPieces();
  }
/*
  searchPiece() {
    const namePiece = this.searchForm.get('NamePiece')?.value;

    if (namePiece) {
      this.pieceService.searchPiece(namePiece).subscribe(
        (res: Piecedto[]): void => {
          this.pieces = res;
        },
        error => {
          console.error('Error searching pieces:', error);
        }
      );
    } else {
      console.warn('NamePiece is null or undefined');
    }
  }
*/
  getAllPieces() {
    this.category.getAllPieces().subscribe(
      (res: Piecedto[]) => {
        this.pieces = res;
      },
      error => {
        console.error('Error fetching all pieces:', error);
      }
    );
  }
}
