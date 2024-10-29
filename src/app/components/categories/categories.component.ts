import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';  // Importer CommonModule
import { RouterModule } from '@angular/router';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NzSpinModule, NzFormModule, NzButtonModule, NzGridModule, NzInputModule, NzSelectModule, NavComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
 

  size:NzButtonSize="large";

  categories!:any[];

  constructor(private categoryservice:CategoryService){

  }
 
 
 
  ngOnInit() {
    this.listCategories();
  }

  listCategories(){
    this.categoryservice.listCategories().subscribe(res => {
      console.log(res);
      this.categories=res;
    })
  }

}
