import { Component, OnInit } from '@angular/core';
import { PieceSaleService } from '../../services/piece-sale.service';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-sold-pieces',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,NzSpinModule,NzFormModule,NzButtonModule,NzGridModule,NzInputModule,NzSelectModule],
  templateUrl: './sold-pieces.component.html',
  styleUrl: './sold-pieces.component.css'
})
export class SoldPiecesComponent implements OnInit {

  size: NzButtonSize = "large";
  sales!: any[];
  errorMessage: string = ''; // Ajouter une variable pour le message d'erreur

  constructor(private piecesales: PieceSaleService) { }

  ngOnInit() {
    this.listSoldPieces();
  }

  listSoldPieces() {
    this.piecesales.getAllSoldPieces().subscribe(
      (res) => {
        console.log(res);
        this.sales = res;
      },
      (error) => {
        // Gestion de l'erreur
        console.error('Error occurred:', error);
        this.errorMessage = error.message ? error.message : 'An error occurred while fetching sold pieces.';
      }
    );
  }
}