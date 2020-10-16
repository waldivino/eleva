/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscolasComponent } from './escolas.component';

describe('EscolasComponent', () => {
  let component: EscolasComponent;
  let fixture: ComponentFixture<EscolasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
