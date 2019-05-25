import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcinhaComponent } from './calcinha.component';

describe('CalcinhaComponent', () => {
  let component: CalcinhaComponent;
  let fixture: ComponentFixture<CalcinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
