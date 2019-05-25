import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasculinoAdultoComponent } from './masculino-adulto.component';

describe('MasculinoAdultoComponent', () => {
  let component: MasculinoAdultoComponent;
  let fixture: ComponentFixture<MasculinoAdultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasculinoAdultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasculinoAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
