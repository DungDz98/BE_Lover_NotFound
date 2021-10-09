import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCcdvComponent } from './detail-ccdv.component';

describe('DetailCcdvComponent', () => {
  let component: DetailCcdvComponent;
  let fixture: ComponentFixture<DetailCcdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCcdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCcdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
