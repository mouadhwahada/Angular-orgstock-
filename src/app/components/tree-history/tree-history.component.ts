import { Component } from '@angular/core';
import { HistoryTreeService } from '../../services/history-tree.service';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tree-history',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule,NzSpinModule,NzFormModule,NzButtonModule,NzGridModule,NzInputModule,NzSelectModule,NzTableModule],
  templateUrl: './tree-history.component.html',
  styleUrl: './tree-history.component.css'
})
export class TreeHistoryComponent {

  
    
  size:NzButtonSize="large";

  history!:any[] ;

  constructor(private Intervention:HistoryTreeService){

  }
 
 
 
  ngOnInit() {
    this.listInterventions();
  }

  listInterventions(){
    this.Intervention.listInterventions().subscribe(res => {
      console.log(res);
      this.history=res;
    })
  }
}


