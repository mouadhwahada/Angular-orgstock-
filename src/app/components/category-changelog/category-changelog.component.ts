import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-changelog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-changelog.component.html',
  styleUrl: './category-changelog.component.css'
})
export class CategoryChangelogComponent {

  categoryId!: number;
  changeLogs: any[] = [];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.loadChangeLogs();
    });
  }

  loadChangeLogs(): void {
    this.categoryService.getChangeLog(this.categoryId).subscribe({
      next: (logs) => {
        this.changeLogs = logs;
      },
      error: (err) => {
        console.error('Error fetching change logs:', err);
      }
    });
  }
}
