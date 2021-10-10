import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCcdvComponent } from './check-ccdv.component';

describe('CheckCcdvComponent', () => {
  let component: CheckCcdvComponent;
  let fixture: ComponentFixture<CheckCcdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCcdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCcdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
