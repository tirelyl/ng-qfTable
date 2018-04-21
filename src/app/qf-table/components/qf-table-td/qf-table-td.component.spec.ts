import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfTableTdComponent } from './qf-table-td.component';

describe('QfTableTdComponent', () => {
  let component: QfTableTdComponent;
  let fixture: ComponentFixture<QfTableTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfTableTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfTableTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
