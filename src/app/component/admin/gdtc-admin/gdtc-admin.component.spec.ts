import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdtcAdminComponent } from './gdtc-admin.component';

describe('GdtcAdminComponent', () => {
  let component: GdtcAdminComponent;
  let fixture: ComponentFixture<GdtcAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdtcAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdtcAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
