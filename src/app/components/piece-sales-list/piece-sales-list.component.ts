import { Component } from '@angular/core';
import { PieceSale } from '../../DTO/piece-sale.model';
import { PieceSaleService } from '../../services/piece-sale.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-piece-sales-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './piece-sales-list.component.html',
  styleUrl: './piece-sales-list.component.css'
})
export class PieceSalesListComponent {
  clientCin!: string;
  sales: PieceSale[] = [];
  errorMessage: string = '';

  constructor(private pieceSaleService: PieceSaleService) {}

  getSales(): void {
    this.pieceSaleService.getSalesByClientCin(this.clientCin).subscribe({
      next: (sales) => this.sales = sales,
      error: (err) => {
        console.error('Error response:', err);
        // Essayez d'extraire un message d'erreur plus lisible
        this.errorMessage = `Erreur : ${err.error ? err.error.message : err.message || 'Une erreur est survenue.'}`;
      }
    });
  }
}