import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterventionHisotryServiceService } from '../../services/intervention-hisotry-service.service';
import { CommonModule } from '@angular/common';
import { RecursiveAstVisitor } from '@angular/compiler';
import {  } from '../../DTO/intervention-history.dto';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzSpinComponent, NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
@Component({
  selector: 'app-showinterventions',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NzSpinModule,NzFormModule,NzButtonModule,NzGridModule,NzInputModule,NzSelectModule,NzTableModule],
  templateUrl: './showinterventions.component.html',
  styleUrl: './showinterventions.component.css'
})
export class ShowinterventionsComponent {
/*
  interventionForm!: FormGroup;
  interventions: InterventionHistory[] = [];

  constructor(
    private fb: FormBuilder,
    private interventionHistoryService: InterventionHisotryServiceService
  ) {}

  ngOnInit() {
    this.interventionForm = this.fb.group({
      pieceId: ['']
    });
  }

  onSubmit() {
    const pieceId = this.interventionForm.get('pieceId')?.value;
    if (pieceId) {
      this.interventionHistoryService.getInterventionsByPieceId(pieceId).subscribe(
        (data) => {
          this.interventions = data;
        },
        (error) => {
          console.error('Error fetching interventions', error);
        }
      );
    }
  }*/


    
  size:NzButtonSize="large";

  interventions!:any[];

  constructor(private Intervention:InterventionHisotryServiceService){

  }
 
 
 
  ngOnInit() {
    this.listInterventions();
  }

  listInterventions(){
    this.Intervention.listInterventions().subscribe(res => {
      console.log(res);
      this.interventions=res;
    })
  }
}
