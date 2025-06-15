import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGridExampleComponent } from './angular-grid-example.component';

describe('AngularGridExampleComponent', () => {
  let component: AngularGridExampleComponent;
  let fixture: ComponentFixture<AngularGridExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularGridExampleComponent]
    });
    fixture = TestBed.createComponent(AngularGridExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
