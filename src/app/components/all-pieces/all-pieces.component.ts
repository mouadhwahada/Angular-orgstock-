import { Component, OnInit } from '@angular/core';
import { PieceService } from '../../services/piece.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-pieces',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-pieces.component.html',
  styleUrls: ['./all-pieces.component.css']
})
export class AllPiecesComponent implements OnInit {

  pieces !: any[];
  categories: { [key: number]: string } = {};

  constructor(
    private pieceService: PieceService,
    private categoryService: CategoryService
  ) { }

  loadCategoryNames(): void {
    this.pieces.forEach(piece => {
      if (piece.categoryId && !this.categories[piece.categoryId]) {
        this.categoryService.getCategoryById(piece.categoryId).subscribe(category => {
          this.categories[piece.categoryId] = category.name;
        });
      }
    });
  }

  getCategoryName(categoryId: number): string {
    return this.categories[categoryId] || 'Loading...';
  }

  ngOnInit() {  
this.listPieces()  }

  listPieces() {
    this.pieceService.listPieces().subscribe(res => {
      console.log(res);
      this.pieces = res;
    });
  }
}
