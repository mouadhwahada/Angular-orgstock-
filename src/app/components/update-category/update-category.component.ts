import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CategoryService } from '../../services/category.service';
import { PieceService } from '../../services/piece.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {

  
  updateCategoryForm!: FormGroup;
  id!: number; // Assurez-vous que `id` est initialisé correctement
  categories: any;

  constructor(
    private categoryService: CategoryService,
    private pieceService: PieceService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit() {
    // Utilisez l'observable pour obtenir l'ID
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id']; // Convertissez en nombre si l'ID est numérique
      if (this.id) {
        this.getCategoryById();
      } else {
        console.error('Category ID is not available.');
      }
    });

    this.updateCategoryForm = this.fb.group({
      description: [null, Validators.required],
      name: [null, Validators.required],
    });

    this.getAllCategories();
  }

  getCategoryById() {
    if (this.id) {
      this.categoryService.getCategoryById(this.id).subscribe({
        next: (res) => {
          console.log('Category data:', res);
          const piece = res;
          this.updateCategoryForm.patchValue(piece);
        },
        error: (err) => {
          console.error('Error fetching category:', err);
        }
      });
    } else {
      console.error('Category ID is null or undefined.');
    }
  }

  getAllCategories() {
    this.categoryService.listCategories().subscribe({
      next: (res) => {
        this.categories = res;
        console.log('Categories:', res);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  updateCategory() {
    const pieceDto = {
      name: this.updateCategoryForm.get('name')!.value,
      description: this.updateCategoryForm.get('description')!.value,
    };

    this.categoryService.updateCategory(this.id, pieceDto).subscribe({
      next: (res) => {
        console.log('Update response:', res);
        this.notification.success(
          'Success',
          'Category updated successfully',
          { nzDuration: 5000 }
        );
        // Redirect or perform another action after successful update
        this.router.navigate(['/']); // Assuming '/pieces' is the route to list pieces
      },
      error: (err) => {
        console.error('Error updating piece:', err);
        this.notification.error(
          'Error',
          'Failed to update Category',
          { nzDuration: 5000 }
        );
      }
    });
  }
}
