import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDepartComponent } from './mes-depart.component';

describe('MesDepartComponent', () => {
  let component: MesDepartComponent;
  let fixture: ComponentFixture<MesDepartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDepartComponent]
    });
    fixture = TestBed.createComponent(MesDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
