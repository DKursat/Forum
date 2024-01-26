import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionComponent } from './user-option.component';

describe('UserOptionComponent', () => {
  let component: UserOptionComponent;
  let fixture: ComponentFixture<UserOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserOptionComponent]
    });
    fixture = TestBed.createComponent(UserOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
