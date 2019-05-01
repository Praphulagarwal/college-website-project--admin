import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StPlacementComponent } from './st-placement.component';

describe('StPlacementComponent', () => {
  let component: StPlacementComponent;
  let fixture: ComponentFixture<StPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
