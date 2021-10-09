import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPayerComponent } from './rent-payer.component';

describe('RentPayerComponent', () => {
  let component: RentPayerComponent;
  let fixture: ComponentFixture<RentPayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentPayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
