import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSuppliersComponent } from './reg-suppliers.component';

describe('RegSuppliersComponent', () => {
  let component: RegSuppliersComponent;
  let fixture: ComponentFixture<RegSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
