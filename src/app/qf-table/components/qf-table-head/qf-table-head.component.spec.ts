import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfTableHeadComponent } from './qf-table-head.component';

describe('QfTableHeadComponent', () => {
  let component: QfTableHeadComponent;
  let fixture: ComponentFixture<QfTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfTableHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
