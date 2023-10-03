import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerDepartComponent } from './passager-depart.component';

describe('PassagerDepartComponent', () => {
  let component: PassagerDepartComponent;
  let fixture: ComponentFixture<PassagerDepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagerDepartComponent]
    });
    fixture = TestBed.createComponent(PassagerDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
