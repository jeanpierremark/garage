import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesBagagesComponent } from './mes-bagages.component';

describe('MesBagagesComponent', () => {
  let component: MesBagagesComponent;
  let fixture: ComponentFixture<MesBagagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesBagagesComponent]
    });
    fixture = TestBed.createComponent(MesBagagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
