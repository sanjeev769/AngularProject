import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStateExampleComponent } from './country-state-example.component';

describe('CountryStateExampleComponent', () => {
  let component: CountryStateExampleComponent;
  let fixture: ComponentFixture<CountryStateExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryStateExampleComponent]
    });
    fixture = TestBed.createComponent(CountryStateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
