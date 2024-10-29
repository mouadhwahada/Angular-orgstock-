import { Component, OnInit } from '@angular/core';
import { PieceChangeLog } from '../../DTO/PieceChangeLog.model';
import { PieceService } from '../../services/piece.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piece-log',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './piece-log.component.html',
  styleUrl: './piece-log.component.css'
})
export class PieceLogComponent implements OnInit{

  pieceId!: number;

  logs: PieceChangeLog[] = [];
  errorMessage: string = '';

  constructor(
    private pieceService: PieceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Récupérer l'ID de pièce depuis l'URL
    this.pieceId = Number(this.route.snapshot.paramMap.get('id'));

    // Appeler le service pour obtenir les logs
    this.pieceService.getLogsByPieceId(this.pieceId).subscribe({
      next: (data) => this.logs = data,
      error: (err) => this.errorMessage = err.message
    });
  }
}
