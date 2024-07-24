import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RouterModule } from '@angular/router';
import { PieceService } from '../../services/piece.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-allpieces',
  standalone: true,
  imports: [
    HttpClientModule,
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

  size: NzButtonSize = "large";
  pieces: any[] = [];  // Initialize as an empty array
  selectedPieceId!: number;
  searchForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pieceService: PieceService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      NamePiece: [null]
    });
    this.getAllPieces();
  }

  searchPiece() {
    const namePiece = this.searchForm.get('NamePiece')?.value;

    if (namePiece) {
      this.pieceService.searchPiecesByNamePiece(namePiece).subscribe(
        (res: any[]) => {
          this.pieces = res;  // Directly assign the response to pieces
        },
        error => {
          console.error('Error searching pieces:', error);
        }
      );
    } else {
      console.warn('NamePiece is null or undefined');
    }
  }

  getAllPieces() {
    this.categoryService.getAllPieces().subscribe(
      (res: any[]) => {
        console.log(res);
        this.pieces = res;
      },
      error => {
        console.error('Error fetching all pieces:', error);
      }
    );
  }
}


