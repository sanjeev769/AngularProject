import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalInterfaceImplementedPageComponent } from './final-interface-implemented-page.component';

describe('FinalInterfaceImplementedPageComponent', () => {
  let component: FinalInterfaceImplementedPageComponent;
  let fixture: ComponentFixture<FinalInterfaceImplementedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalInterfaceImplementedPageComponent]
    });
    fixture = TestBed.createComponent(FinalInterfaceImplementedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
