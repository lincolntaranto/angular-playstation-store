import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelGoldComponent } from './card-label-gold.component';

describe('CardLabelGoldComponent', () => {
  let component: CardLabelGoldComponent;
  let fixture: ComponentFixture<CardLabelGoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLabelGoldComponent]
    });
    fixture = TestBed.createComponent(CardLabelGoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
