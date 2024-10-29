import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { PieceService } from '../../services/piece.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CommonModule } from '@angular/common';
import { Piecedto } from '../../DTO/piecedto.model';
import { PieceChangeLog } from '../../DTO/PieceChangeLog.model';

@Component({
  selector: 'app-update-piece',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './update-piece.component.html',
  styleUrls: ['./update-piece.component.css']
})
export class UpdatePieceComponent  {
 
pieceId!:number;
  pieceName: string = '';
  piecedto: Piecedto = new Piecedto(); // Initialisez avec les valeurs appropriées
  logs: PieceChangeLog[] = []; // Pour afficher les logs après mise à jour
  errorMessage: string = '';

  constructor(
    private pieceService: PieceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Récupérez le nom de la pièce depuis les paramètres de route
    this.pieceName = this.route.snapshot.paramMap.get('pieceName') || '';
  }

  ngOnInit(): void {
    this.loadPieceDetails();
  }

  loadPieceDetails(): void {
    // Ajoutez ici la logique pour charger les détails de la pièce, si nécessaire
  }

  updatePiece(): void {
    if (this.pieceName && this.piecedto) {
      this.pieceService.updatePiecee(this.pieceName, this.piecedto).subscribe(
        response => {
          console.log('Piece updated successfully', response);
          alert('Pièce mise à jour avec succès');
          // Charger les logs après mise à jour
          this.loadChangeLogs();
        },
        error => {
          console.error('Error updating piece', error);
          alert('Erreur lors de la mise à jour de la pièce');
        }
      );
    }
  }

  loadChangeLogs(): void {
    this.pieceService.getLogsByPieceId(this.pieceId).subscribe(
      data => this.logs = data,
      error => this.errorMessage = error.message
    );
  }
}

/*
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
  }*/
/*
    pieceName: string = '';
    piecedto: Piecedto = new Piecedto(); // Initialisez avec les valeurs appropriées
  
    constructor(
      private pieceService: PieceService,
      private route: ActivatedRoute,
      private router: Router
    ) {
      // Récupérez le nom de la pièce depuis les paramètres de route
      this.pieceName = this.route.snapshot.paramMap.get('pieceName') || '';
    }
  
    updatePiece() {
      if (this.pieceName && this.piecedto) {
        this.pieceService.updatePiecee(this.pieceName, this.piecedto).subscribe(
          response => {
            console.log('Piece updated successfully', response);
            alert('Pièce mise à jour avec succès');
            this.router.navigate(['/pieces']); // Redirection vers la liste des pièces
          },
          error => {
            console.error('Error updating piece', error);
            alert('Erreur lors de la mise à jour de la pièce');
          }
        );
      }
    }
}
*/