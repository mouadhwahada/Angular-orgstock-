import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpiecesComponent } from './allpieces.component';

describe('AllpiecesComponent', () => {
  let component: AllpiecesComponent;
  let fixture: ComponentFixture<AllpiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllpiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
