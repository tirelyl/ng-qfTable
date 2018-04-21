import { Directive, Host, Optional } from '@angular/core';
import { QfTableComponent } from './qf-table/qf-table.component';

@Directive({
  selector: 'tbody',
  host: {
    '[class.qf-table-tbody]:': 'qfTableComponent'
  }
})
export class QfTableTbodyDirective {

  constructor(@Host() @Optional() public qfTableComponent: QfTableComponent) { }

}
