import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisolaComponent } from './camisola.component';

describe('CamisolaComponent', () => {
  let component: CamisolaComponent;
  let fixture: ComponentFixture<CamisolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamisolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamisolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
