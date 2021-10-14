import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAuthenticationComponent } from './error-authentication.component';

describe('ErrorAuthenticationComponent', () => {
  let component: ErrorAuthenticationComponent;
  let fixture: ComponentFixture<ErrorAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
