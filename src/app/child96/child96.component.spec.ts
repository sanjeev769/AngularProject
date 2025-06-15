import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child96Component } from './child96.component';

describe('Child96Component', () => {
  let component: Child96Component;
  let fixture: ComponentFixture<Child96Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child96Component]
    });
    fixture = TestBed.createComponent(Child96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
