import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldPiecesComponent } from './sold-pieces.component';

describe('SoldPiecesComponent', () => {
  let component: SoldPiecesComponent;
  let fixture: ComponentFixture<SoldPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldPiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
