import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DkToastComponent } from './dk-toast.component';

describe('DkToastComponent', () => {
  let component: DkToastComponent;
  let fixture: ComponentFixture<DkToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
