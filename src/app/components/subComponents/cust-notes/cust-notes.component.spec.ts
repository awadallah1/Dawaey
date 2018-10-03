import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustNotesComponent } from './cust-notes.component';

describe('CustNotesComponent', () => {
  let component: CustNotesComponent;
  let fixture: ComponentFixture<CustNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
