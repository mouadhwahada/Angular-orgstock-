import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePieceComponent } from './update-piece.component';

describe('UpdatePieceComponent', () => {
  let component: UpdatePieceComponent;
  let fixture: ComponentFixture<UpdatePieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
