import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fantastic4Component } from './fantastic4.component';

describe('Fantastic4Component', () => {
  let component: Fantastic4Component;
  let fixture: ComponentFixture<Fantastic4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fantastic4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fantastic4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
