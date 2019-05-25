import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemininoInfantilComponent } from './feminino-infantil.component';

describe('FemininoInfantilComponent', () => {
  let component: FemininoInfantilComponent;
  let fixture: ComponentFixture<FemininoInfantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoInfantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
