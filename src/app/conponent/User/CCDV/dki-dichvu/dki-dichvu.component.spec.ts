import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkiDichvuComponent } from './dki-dichvu.component';

describe('DkiDichvuComponent', () => {
  let component: DkiDichvuComponent;
  let fixture: ComponentFixture<DkiDichvuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkiDichvuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkiDichvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
