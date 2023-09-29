import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPassagerComponent } from './edit-passager.component';

describe('EditPassagerComponent', () => {
  let component: EditPassagerComponent;
  let fixture: ComponentFixture<EditPassagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPassagerComponent]
    });
    fixture = TestBed.createComponent(EditPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
