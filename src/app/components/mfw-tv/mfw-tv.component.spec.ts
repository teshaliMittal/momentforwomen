import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfwTvComponent } from './mfw-tv.component';

describe('MfwTvComponent', () => {
  let component: MfwTvComponent;
  let fixture: ComponentFixture<MfwTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfwTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfwTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
