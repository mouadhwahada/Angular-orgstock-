import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterventionHisotryServiceService } from '../../services/intervention-hisotry-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { InterventionHistorydto } from '../../DTO/intervention-history.dto';
import { PieceSaleService } from '../../services/piece-sale.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SaleRequestDto } from '../../DTO/sale-request.dto';

@Component({
  selector: 'app-intervention-history',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzSelectModule, NzButtonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './intervention-history.component.html',
  styleUrls: ['./intervention-history.component.css']
})
export class InterventionHistoryComponent {
  sales: SaleRequestDto[] = [];
  intervention: InterventionHistorydto = {
    Last_id: '',
    client: '',
    clientCin: '',
    interventionDate: '',
    interventionNature: 'To_Repair',
    technician: '',
    purchaseNumber: 0,
    result: 'Functional',
    observation: '',
    namePiece: '',
    antecedentId: '',
    quantitySold: 0
  };
  responseMessage = '';

  constructor(private pieceSaleService: PieceSaleService,
    private interventionService:InterventionHisotryServiceService
  ) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.pieceSaleService.getAllSoldPieces().subscribe(
      (data: SaleRequestDto[]) => {
        this.sales = data;
        console.log('Sold Pieces:', this.sales); // Vérifier les données chargées
      },
      error => {
        console.error('Error fetching sold pieces:', error);
      }
    );
  }
  onSubmit(): void {
    console.log('Intervention submitted:', this.intervention);
    
    // Appel de la méthode createOrUpdateIntervention() pour envoyer les données
    this.interventionService.createOrUpdateIntervention(this.intervention, this.intervention.purchaseNumber).subscribe(
      response => {
        this.responseMessage = 'Intervention successfully created or updated!';
        console.log('Response:', response);
      },
      error => {
        console.error('Error creating intervention:', error);
        this.responseMessage = 'An error occurred while creating the intervention.';
      }
    );
  }
}