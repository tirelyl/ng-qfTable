import { Component, Input, OnInit, ContentChildren, QueryList, ViewChild, TemplateRef } from '@angular/core';
import { QfTableHeadComponent } from '../qf-table-head/qf-table-head.component';
import { QfTableThComponent } from '../qf-table-th/qf-table-th.component';

@Component({
  selector: 'qf-table',
  templateUrl: './qf-table.component.html'
})
export class QfTableComponent implements OnInit {
  qfTableHeadComponent: QfTableHeadComponent;
  rawData: Array<any> = [];
  data: Array<any> = [];

  @ContentChildren(QfTableThComponent, { descendants: true }) listOfQfThComponent: QueryList<QfTableThComponent>;
  @ViewChild('colGroupTemplate') colGroupTemplate: TemplateRef<void>;

  @Input()
  set qfData(data: Array<any>) {
    if (Array.isArray(data)) {
      this.rawData = data;
      this.parseInputData();
    } else {
      console.warn('qfData only  accept array');
    }
  }

  parseInputData(): void {
    this.data = this.rawData;
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.listOfQfThComponent);
    }, 500);
  }

}
