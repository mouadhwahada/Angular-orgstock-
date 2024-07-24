import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PieceService } from '../../services/piece.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-postcategory',
  standalone: true,
  imports: [CommonModule, NzSpinModule, NzFormModule, NzButtonModule, NzGridModule, NzInputModule, NzSelectModule, ReactiveFormsModule, FormsModule],
  templateUrl: './postcategory.component.html',
  styleUrls: ['./postcategory.component.css']
})
export class PostcategoryComponent {
  isSpinning!: boolean;
  categoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  postCategory() {
    this.isSpinning = true;
    this.categoryService.postCategory(this.categoryForm.value).subscribe(
      (res) => {
        this.isSpinning = false;
        console.log(res);
        if (res.id != null) {
          this.notification.success(
            'SUCCESS',
            'Category posted successfully',
            { nzDuration: 5000 }
          );
        } else {
          this.notification.error(
            'ERROR',
            `${res.message}`,
            { nzDuration: 5000 }
          );
        }
      },
      (error) => {
        this.isSpinning = false;
        this.notification.error(
          'ERROR',
          'An error occurred while posting the category.',
          { nzDuration: 5000 }
        );
      }
    );
  }
}
