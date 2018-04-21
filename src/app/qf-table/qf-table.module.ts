import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QfTableHeadComponent } from './components/qf-table-head/qf-table-head.component';
import { QfTableComponent } from './components/qf-table/qf-table.component';
import { QfTableThComponent } from './components/qf-table-th/qf-table-th.component';
import { QfTableTrDirective } from './components/qf-table-tr.directive';
import { QfTableTbodyDirective } from './components/qf-table-tbody.directive';
import { QfTableTdComponent } from './components/qf-table-td/qf-table-td.component';
import { QfTableResizerComponent } from './components/qf-table-resizer/qf-table-resizer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    QfTableComponent,
    QfTableHeadComponent,
    QfTableThComponent,
    QfTableTrDirective,
    QfTableTbodyDirective,
    QfTableTdComponent,
    QfTableResizerComponent
  ],
  exports: [
    QfTableComponent,
    QfTableHeadComponent,
    QfTableThComponent,
    QfTableTrDirective,
    QfTableTbodyDirective,
    QfTableTdComponent
  ]
})
export class QfTableModule { }
