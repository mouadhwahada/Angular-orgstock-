import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { PieceService } from '../../services/piece.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-piece',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent implements OnInit {

  updatePieceForm!: FormGroup;
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
        this.getPieceById();
      } else {
        console.error('Piece ID is not available.');
      }
    });

    this.updatePieceForm = this.fb.group({
      pieceState: [null, Validators.required],
      quantity: [null, Validators.required],
    });

    this.getAllCategories();
  }

  getPieceById() {
    if (this.id) {
      this.pieceService.getPiece(this.id).subscribe({
        next: (res) => {
          console.log('Piece data:', res);
          const piece = res;
          this.updatePieceForm.patchValue(piece);
        },
        error: (err) => {
          console.error('Error fetching piece:', err);
        }
      });
    } else {
      console.error('Piece ID is null or undefined.');
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

  updatePiece() {
    const pieceDto = {
      pieceState: this.updatePieceForm.get('pieceState')!.value,
      quantity: this.updatePieceForm.get('quantity')!.value,
    };

    this.pieceService.updatePiece(this.id, pieceDto).subscribe({
      next: (res) => {
        console.log('Update response:', res);
        this.notification.success(
          'Success',
          'Piece updated successfully',
          { nzDuration: 5000 }
        );
        // Redirect or perform another action after successful update
        this.router.navigate(['/pieces']); // Assuming '/pieces' is the route to list pieces
      },
      error: (err) => {
        console.error('Error updating piece:', err);
        this.notification.error(
          'Error',
          'Failed to update piece',
          { nzDuration: 5000 }
        );
      }
    });
  }
}
