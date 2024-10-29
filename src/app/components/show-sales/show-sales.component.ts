import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PieceSaleService } from '../../services/piece-sale.service';
import { PieceSale } from '../../DTO/piece-sale.model';
import { Route, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-show-sales',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './show-sales.component.html',
  styleUrl: './show-sales.component.css'
})
export class ShowSalesComponent {
  
  
  clientCin!: string;
  errorMessage: string = '';

  sales: any[] = [];

  constructor(private pieceSaleService: PieceSaleService
    ,private router:Router
  ) {}

 /* getSales(): void {
    this.pieceSaleService.getSalesByClientCin(this.clientCin).subscribe({
      next: (sales) => this.sales = sales,
      error: (err) => {
        console.error('Error response:', err);
        this.errorMessage = `Error: ${err.message}`;
      }
    });
  }
}*/

  
  getSalesByClientCin() {
    this.pieceSaleService.getSalesByClientCin(this.clientCin).subscribe({
      next: (sales) => {
        this.sales = sales;
      },
      error: (error) => {
        console.error('Error fetching sales:', error);
      }
    });
  }
}

