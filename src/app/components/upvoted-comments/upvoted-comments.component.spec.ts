import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedCommentsComponent } from './upvoted-comments.component';

describe('UpvotedCommentsComponent', () => {
  let component: UpvotedCommentsComponent;
  let fixture: ComponentFixture<UpvotedCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvotedCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
