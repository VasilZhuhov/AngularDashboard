import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedValidationsComponent } from './issued-validations.component';

describe('IssuedValidationsComponent', () => {
  let component: IssuedValidationsComponent;
  let fixture: ComponentFixture<IssuedValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
