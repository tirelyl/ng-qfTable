import { Directive, Host, Optional } from '@angular/core';
import { QfTableComponent } from './qf-table/qf-table.component';

@Directive({
  selector: 'tr',
  host: {
    '[class.qf-table-row]': 'qfTableComponent'
  }
})
export class QfTableTrDirective {

  constructor(@Host() @Optional() public qfTableComponent: QfTableComponent) {
  }

}
