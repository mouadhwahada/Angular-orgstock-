import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceLogComponent } from './piece-log.component';

describe('PieceLogComponent', () => {
  let component: PieceLogComponent;
  let fixture: ComponentFixture<PieceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
