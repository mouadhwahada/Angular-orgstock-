import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceSaleComponent } from './piece-sale.component';

describe('PieceSaleComponent', () => {
  let component: PieceSaleComponent;
  let fixture: ComponentFixture<PieceSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
