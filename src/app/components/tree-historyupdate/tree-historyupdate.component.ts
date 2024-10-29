import { Component } from '@angular/core';
import { TeeService } from '../../services/tee.service';
import { UpdateHistoryTreeRequest } from '../../TreedTO/update-history-tree-request.model';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tree-historyupdate',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './tree-historyupdate.component.html',
  styleUrl: './tree-historyupdate.component.css'
})
export class TreeHistoryupdateComponent {

  updateRequest: UpdateHistoryTreeRequest = {
    clientCin: '',
    purchaseNumber:1,
    emplacementSource: '',
    reperationDate: '',
    emplacementDestination: '',
    status: '',
    observation: ''
  };

  statusOptions = ['Functionnal', 'Pending_Repair', 'in_progress'];
  observationOptions = ['Defective_to_be_checked', 'Successful_repair', 'Repair_Completed_tested_ok'];


  constructor(
    private historyTreeService: TeeService,
    private notification: NzNotificationService,
    private router: Router // Injecter le Router ici

  ) {}

  onSubmit() {
    this.historyTreeService.updateHistoryTree(this.updateRequest).subscribe(
      (response) => {
        this.notification.success('Success', 'History tree updated successfully');
        this.router.navigate(['/History-Tree']); // Redirection après succès
      },
      (error) => {
        this.notification.error('Error', 'Failed to update history tree');
      }
    );
  }
}
