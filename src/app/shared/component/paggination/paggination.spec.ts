import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paggination } from './paggination';

describe('Paggination', () => {
  let component: Paggination;
  let fixture: ComponentFixture<Paggination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paggination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paggination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
