import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemininoAdultoComponent } from './feminino-adulto.component';

describe('FemininoAdultoComponent', () => {
  let component: FemininoAdultoComponent;
  let fixture: ComponentFixture<FemininoAdultoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemininoAdultoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemininoAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
