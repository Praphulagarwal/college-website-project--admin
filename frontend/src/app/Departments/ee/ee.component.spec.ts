import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeComponent } from './ee.component';

describe('EeComponent', () => {
  let component: EeComponent;
  let fixture: ComponentFixture<EeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
