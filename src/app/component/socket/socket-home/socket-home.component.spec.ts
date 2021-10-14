import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketHomeComponent } from './socket-home.component';

describe('SocketHomeComponent', () => {
  let component: SocketHomeComponent;
  let fixture: ComponentFixture<SocketHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
