import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexshopComponent } from './sexshop.component';

describe('SexshopComponent', () => {
  let component: SexshopComponent;
  let fixture: ComponentFixture<SexshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
