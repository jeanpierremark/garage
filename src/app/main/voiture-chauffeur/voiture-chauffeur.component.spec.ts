import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureChauffeurComponent } from './voiture-chauffeur.component';

describe('VoitureChauffeurComponent', () => {
  let component: VoitureChauffeurComponent;
  let fixture: ComponentFixture<VoitureChauffeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureChauffeurComponent]
    });
    fixture = TestBed.createComponent(VoitureChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
