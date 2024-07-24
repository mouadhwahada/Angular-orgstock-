import { Component, Input } from '@angular/core';
import { PieceService } from '../../services/piece.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-piece-changelog',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, NzSpinModule, NzFormModule, NzButtonModule, NzGridModule, NzInputModule, NzSelectModule],
  templateUrl: './piece-changelog.component.html',
  styleUrl: './piece-changelog.component.css'
})
export class PieceChangelogComponent {
  pieceId!: number;
  changeLogs: any[] = [];

  constructor(private route: ActivatedRoute, private pieceService: PieceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pieceId = +params['id'];
      this.loadChangeLogs();
    });
  }

  loadChangeLogs(): void {
    this.pieceService.getChangeLog(this.pieceId).subscribe({
      next: (logs) => {
        this.changeLogs = logs;
      },
      error: (err) => {
        console.error('Error fetching change logs:', err);
      }
    });
  }
}