import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceChangelogComponent } from './piece-changelog.component';

describe('PieceChangelogComponent', () => {
  let component: PieceChangelogComponent;
  let fixture: ComponentFixture<PieceChangelogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceChangelogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
