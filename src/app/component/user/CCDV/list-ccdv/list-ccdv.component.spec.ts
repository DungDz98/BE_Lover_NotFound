import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCcdvComponent } from './list-ccdv.component';

describe('ListCcdvComponent', () => {
  let component: ListCcdvComponent;
  let fixture: ComponentFixture<ListCcdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCcdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCcdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
