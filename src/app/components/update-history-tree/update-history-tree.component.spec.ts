import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHistoryTreeComponent } from './update-history-tree.component';

describe('UpdateHistoryTreeComponent', () => {
  let component: UpdateHistoryTreeComponent;
  let fixture: ComponentFixture<UpdateHistoryTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateHistoryTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHistoryTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
