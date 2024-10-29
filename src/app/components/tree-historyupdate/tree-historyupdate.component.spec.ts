import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeHistoryupdateComponent } from './tree-historyupdate.component';

describe('TreeHistoryupdateComponent', () => {
  let component: TreeHistoryupdateComponent;
  let fixture: ComponentFixture<TreeHistoryupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeHistoryupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeHistoryupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
