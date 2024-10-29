import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeHistoryComponent } from './tree-history.component';

describe('TreeHistoryComponent', () => {
  let component: TreeHistoryComponent;
  let fixture: ComponentFixture<TreeHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
