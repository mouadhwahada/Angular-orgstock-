import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HistoryTreeService, UpdateHistoryTreeeRequest } from '../../services/history-tree.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { TreeHistoryComponent } from "../tree-history/tree-history.component";

@Component({
  selector: 'app-update-history-tree',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzFormModule],
  templateUrl: './update-history-tree.component.html',
  styleUrls: ['./update-history-tree.component.css']
})
export class UpdateHistoryTreeComponent implements OnInit{
  clientCin!: string;
  purchaseNumber!: number;
  updateRequest: UpdateHistoryTreeeRequest = {
    emplacementSource: '',
    emplacementDestination: '',
    status: ' Functional',
    observation: 'Defective_to_be_checked',
    reperationDate: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private historyTreeService: HistoryTreeService
  ) {}

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      this.clientCin = params.get('clientCin')!;
      this.purchaseNumber = +params.get('purchaseNumber')!;
      
      // Charger l'historique existant pour préremplir le formulaire
      this.historyTreeService.getHistoryTree(this.clientCin, this.purchaseNumber).subscribe(history => {
        this.updateRequest = {
          emplacementSource: history.emplacementSource,
          reperationDate: history.reperationDate,
          emplacementDestination: history.emplacementDestination,
          status: history.status,
          observation: history.observation
        };
      });
    });
  }

  onUpdate(): void {
    this.historyTreeService.updateHistoryTreee(this.clientCin, this.purchaseNumber, this.updateRequest).subscribe({
      next: () => {
        alert('History updated successfully');
        this.router.navigate(['/History-Tree']); // Rediriger vers la liste après la mise à jour
      },
      error: (err) => {
        console.error('Update failed', err);
        alert('Update failed');
      }
    });
  }
}