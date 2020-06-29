import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfwMagComponent } from './mfw-mag.component';

describe('MfwMagComponent', () => {
  let component: MfwMagComponent;
  let fixture: ComponentFixture<MfwMagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfwMagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfwMagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
