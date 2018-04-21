import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QfTableResizerComponent } from './qf-table-resizer.component';

describe('QfTableResizerComponent', () => {
  let component: QfTableResizerComponent;
  let fixture: ComponentFixture<QfTableResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QfTableResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QfTableResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
