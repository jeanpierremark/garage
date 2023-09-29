import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBagageComponent } from './add-bagage.component';

describe('AddBagageComponent', () => {
  let component: AddBagageComponent;
  let fixture: ComponentFixture<AddBagageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBagageComponent]
    });
    fixture = TestBed.createComponent(AddBagageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
