import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChauffeurComponent } from './edit-chauffeur.component';

describe('EditChauffeurComponent', () => {
  let component: EditChauffeurComponent;
  let fixture: ComponentFixture<EditChauffeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditChauffeurComponent]
    });
    fixture = TestBed.createComponent(EditChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});