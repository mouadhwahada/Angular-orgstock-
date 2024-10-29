import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceSalesListComponent } from './piece-sales-list.component';

describe('PieceSalesListComponent', () => {
  let component: PieceSalesListComponent;
  let fixture: ComponentFixture<PieceSalesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieceSalesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieceSalesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
