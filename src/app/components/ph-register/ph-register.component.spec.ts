import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhRegisterComponent } from './ph-register.component';

describe('PhRegisterComponent', () => {
  let component: PhRegisterComponent;
  let fixture: ComponentFixture<PhRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
