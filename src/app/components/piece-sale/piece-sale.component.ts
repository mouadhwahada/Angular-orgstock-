import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PieceSaleService } from '../../services/piece-sale.service';
import { PieceService } from '../../services/piece.service'; // Importez le service de pièces
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { SaleRequestDto } from '../../DTO/sale-request.dto';
import { Piecedto } from '../../DTO/piecedto.model';

@Component({
  selector: 'app-piece-sale',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './piece-sale.component.html',
  styleUrls: ['./piece-sale.component.css']
})
export class PieceSaleComponent implements OnInit {
  saleForm: FormGroup;
  sales: any[] = [];
  clientCin: string = '';
  pieces: Piecedto[] = []; // Liste des pièces disponibles

  constructor(
    private fb: FormBuilder, 
    private pieceSaleService: PieceSaleService, 
    private pieceService: PieceService, // Injectez le service de pièces
    private notification: NzNotificationService
  ) {
    this.saleForm = this.fb.group({
      pieceName: ['', Validators.required],
      quantitySold: [0, [Validators.required, Validators.min(1)]],
      clientCin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadPieces(); // Chargez la liste des pièces lors de l'initialisation du composant
  }

  loadPieces(): void {
    this.pieceService.listPieces().subscribe(
      (data: Piecedto[]) => {
        this.pieces = data; // Assignez les données récupérées à la liste des pièces
      },
      (error) => {
        console.error('Error fetching pieces:', error);
      }
    );
  }

  submitSale(): void {
    if (this.saleForm.valid) {
      const saleRequest: SaleRequestDto = this.saleForm.value;
      this.pieceSaleService.sellPiece(saleRequest).subscribe(
        response => {
          this.notification.success('Success', 'Piece sold successfully', { nzDuration: 5000 });
          this.getSalesByClientCin(saleRequest.clientCin);
        },
        error => {
          this.notification.error('Error', 'Error selling piece', { nzDuration: 5000 });
        }
      );
    }
  }

  getSalesByClientCin(clientCin: string): void {
    this.pieceSaleService.getSalesByClientCin(clientCin).subscribe(
      response => {
        this.sales = response;
      },
      error => {
        console.error('Error fetching sales:', error);
      }
    );
  }
}
