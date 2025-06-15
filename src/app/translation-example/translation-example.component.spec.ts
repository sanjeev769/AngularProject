import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationExampleComponent } from './translation-example.component';

describe('TranslationExampleComponent', () => {
  let component: TranslationExampleComponent;
  let fixture: ComponentFixture<TranslationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslationExampleComponent]
    });
    fixture = TestBed.createComponent(TranslationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
