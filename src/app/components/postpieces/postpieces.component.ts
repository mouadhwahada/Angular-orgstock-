import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PieceService } from '../../services/piece.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-postpieces',
  standalone: true,
  imports: [CommonModule, NzSpinModule, NzFormModule, NzButtonModule, NzGridModule, NzInputModule, NzSelectModule, ReactiveFormsModule],
  templateUrl: './postpieces.component.html',
  styleUrls: ['./postpieces.component.css']
})
export class PostpiecesComponent {
  categories: any;
  postPieceForm!: FormGroup;
  isSpinning: boolean = false;
  pieceStates = [
    { label: 'Sold', value: 'SOLD' },
    { label: 'In Stock', value: 'IN_STOCK' },
    { label: 'Out of Stock', value: 'OUT_OF_STOCK' }
  ];
  constructor(private pieceService: PieceService,
              private fb: FormBuilder,
              private notification: NzNotificationService,
              private categoryService: CategoryService) {}

  ngOnInit() {
    this.postPieceForm = this.fb.group({
      categoryId: [null, Validators.required],
      NamePiece: [null, Validators.required],
      description: [null, Validators.required],
      pieceState: [null, Validators.required],
      quantity: [null, Validators.required],
      price: [null, Validators.required],
      supplier: [null, Validators.required],
    });
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.listCategories().subscribe((res) => {
      this.categories = res;
      console.log(res);
    });
  }

  postPiece() {
    this.isSpinning = true;
    const pieceDto = {
      categoryId: this.postPieceForm.get('categoryId')!.value,

      namePiece: this.postPieceForm.get('NamePiece')!.value,
      description: this.postPieceForm.get('description')!.value,
      pieceState: this.postPieceForm.get('pieceState')!.value,
      quantity: this.postPieceForm.get('quantity')!.value,
      price: this.postPieceForm.get('price')!.value,
      supplier: this.postPieceForm.get('supplier')!.value
    };

    this.categoryService.postPiece(pieceDto).subscribe(
      (res) => {
        this.isSpinning = false;
        console.log(res);
        this.notification.success(
          'Success',
          'Piece posted successfully',
          { nzDuration: 5000 }
        );
      },
      (err) => {
        this.isSpinning = false;
        console.error(err);
        this.notification.error(
          'Error',
          'Failed to post piece',
          { nzDuration: 5000 }
        );
      }
    );
  }
}
