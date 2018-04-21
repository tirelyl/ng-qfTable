import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfTableComponent } from './qf-table.component';

describe('QfTableComponent', () => {
  let component: QfTableComponent;
  let fixture: ComponentFixture<QfTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
