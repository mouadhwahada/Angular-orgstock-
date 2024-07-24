import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpiecesComponent } from './postpieces.component';

describe('PostpiecesComponent', () => {
  let component: PostpiecesComponent;
  let fixture: ComponentFixture<PostpiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostpiecesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostpiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
