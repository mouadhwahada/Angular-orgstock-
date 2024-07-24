import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-save-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './save-category.component.html',
  styleUrl: './save-category.component.css'
})
export class SaveCategoryComponent implements OnInit {

  validateForm!:FormGroup;

  constructor(private categoryservice:CategoryService,
    private fb:FormBuilder,    private notification: NzNotificationService
  ){ }



    ngOnInit(){
      this.validateForm=this.fb.group({
        name:[null,[Validators.required]],
        description:[null,[Validators.required]]

      })
    }
    
   /* saveCategory(){
      this.categoryservice.saveCategory(this.validateForm.value).subscribe(res => {
        console.log(res);
      });
      console.log(this.validateForm.value);
    }*/
    /*  saveCategory(): void {
        if (this.validateForm.valid) {
          this.categoryservice.saveCategory(this.validateForm.value).subscribe(res => {
            console.log(res);
          });
          console.log(this.validateForm.value);
          this.notification.success('SUCCESS', 'Category posted successfully', { nzDuration: 5000 });

        } else {
          console.log('Form is invalid');
        }
      }*/
}
