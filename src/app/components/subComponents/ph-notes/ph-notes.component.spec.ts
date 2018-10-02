import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhNotesComponent } from './ph-notes.component';

describe('PhNotesComponent', () => {
  let component: PhNotesComponent;
  let fixture: ComponentFixture<PhNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
