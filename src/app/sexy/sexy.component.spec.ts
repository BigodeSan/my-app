import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexyComponent } from './sexy.component';

describe('SexyComponent', () => {
  let component: SexyComponent;
  let fixture: ComponentFixture<SexyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
