import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryChangelogComponent } from './category-changelog.component';

describe('CategoryChangelogComponent', () => {
  let component: CategoryChangelogComponent;
  let fixture: ComponentFixture<CategoryChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryChangelogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
