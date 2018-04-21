import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfTableThComponent } from './qf-table-th.component';

describe('QfTableThComponent', () => {
  let component: QfTableThComponent;
  let fixture: ComponentFixture<QfTableThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfTableThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfTableThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
