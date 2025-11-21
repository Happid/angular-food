import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveOrNot } from './love-or-not';

describe('LoveOrNot', () => {
  let component: LoveOrNot;
  let fixture: ComponentFixture<LoveOrNot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveOrNot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveOrNot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
