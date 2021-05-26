import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedSubmissionsComponent } from './upvoted-submissions.component';

describe('UpvotedSubmissionsComponent', () => {
  let component: UpvotedSubmissionsComponent;
  let fixture: ComponentFixture<UpvotedSubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvotedSubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
