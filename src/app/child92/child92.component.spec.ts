import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child92Component } from './child92.component';

describe('Child92Component', () => {
  let component: Child92Component;
  let fixture: ComponentFixture<Child92Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child92Component]
    });
    fixture = TestBed.createComponent(Child92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
