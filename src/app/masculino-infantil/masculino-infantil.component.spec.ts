import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculinoInfantilComponent } from './masculino-infantil.component';

describe('MasculinoInfantilComponent', () => {
  let component: MasculinoInfantilComponent;
  let fixture: ComponentFixture<MasculinoInfantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasculinoInfantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasculinoInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
