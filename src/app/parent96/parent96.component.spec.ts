import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent96Component } from './parent96.component';

describe('Parent96Component', () => {
  let component: Parent96Component;
  let fixture: ComponentFixture<Parent96Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent96Component]
    });
    fixture = TestBed.createComponent(Parent96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
