import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestanteComponent } from './gestante.component';

describe('GestanteComponent', () => {
  let component: GestanteComponent;
  let fixture: ComponentFixture<GestanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
