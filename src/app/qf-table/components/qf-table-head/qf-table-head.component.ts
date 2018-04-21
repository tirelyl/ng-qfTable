import {
  Component,
  ContentChildren,
  Host,
  AfterContentInit,
  Optional,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { QfTableComponent } from '../qf-table/qf-table.component';
import { QfTableThComponent } from '../qf-table-th/qf-table-th.component';


@Component({
  selector: 'thead:not(.qf-table-thead)',
  templateUrl: './qf-table-head.component.html',
  styleUrls: ['./qf-table-head.component.scss']
})
export class QfTableHeadComponent implements AfterContentInit {
  @ViewChild('contentTemplate') template: TemplateRef<void>;
  @ContentChildren(QfTableThComponent, { descendants: true }) listOfQfTableThComponent: QueryList<QfTableThComponent>;

  constructor(@Host() @Optional() public qfTableComponent:  QfTableComponent) {
    if (this.qfTableComponent) {
      this.qfTableComponent.qfTableHeadComponent = this;
    }
  }

  ngAfterContentInit(): void {
    const listOfTh = this.listOfQfTableThComponent.toArray();
    console.log(this.template);
  }

}
