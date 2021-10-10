import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCcdvComponent } from './edit-ccdv.component';

describe('EditCcdvComponent', () => {
  let component: EditCcdvComponent;
  let fixture: ComponentFixture<EditCcdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCcdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCcdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
