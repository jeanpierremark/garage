import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPassagerDepartComponent } from './add-passager-depart.component';

describe('AddPassagerDepartComponent', () => {
  let component: AddPassagerDepartComponent;
  let fixture: ComponentFixture<AddPassagerDepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPassagerDepartComponent]
    });
    fixture = TestBed.createComponent(AddPassagerDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
