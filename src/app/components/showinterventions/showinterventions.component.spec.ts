import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinterventionsComponent } from './showinterventions.component';

describe('ShowinterventionsComponent', () => {
  let component: ShowinterventionsComponent;
  let fixture: ComponentFixture<ShowinterventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowinterventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowinterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
