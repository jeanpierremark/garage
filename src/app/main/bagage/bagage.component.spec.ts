import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagageComponent } from './bagage.component';

describe('BagageComponent', () => {
  let component: BagageComponent;
  let fixture: ComponentFixture<BagageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BagageComponent]
    });
    fixture = TestBed.createComponent(BagageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
