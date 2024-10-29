import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionHistoryComponent } from './intervention-history.component';

describe('InterventionHistoryComponent', () => {
  let component: InterventionHistoryComponent;
  let fixture: ComponentFixture<InterventionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterventionHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterventionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
