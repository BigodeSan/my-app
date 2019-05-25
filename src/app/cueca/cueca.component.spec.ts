import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuecaComponent } from './cueca.component';

describe('CuecaComponent', () => {
  let component: CuecaComponent;
  let fixture: ComponentFixture<CuecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
