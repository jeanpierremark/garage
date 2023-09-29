import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBagageComponent } from './edit-bagage.component';

describe('EditBagageComponent', () => {
  let component: EditBagageComponent;
  let fixture: ComponentFixture<EditBagageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBagageComponent]
    });
    fixture = TestBed.createComponent(EditBagageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
