import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeComponent } from './ce.component';

describe('CeComponent', () => {
  let component: CeComponent;
  let fixture: ComponentFixture<CeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
