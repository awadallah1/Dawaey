import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRegisterComponent } from './cust-register.component';

describe('CustRegisterComponent', () => {
  let component: CustRegisterComponent;
  let fixture: ComponentFixture<CustRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
