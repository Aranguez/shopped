import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppedComponent } from './shopped.component';

describe('ShoppedComponent', () => {
  let component: ShoppedComponent;
  let fixture: ComponentFixture<ShoppedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
