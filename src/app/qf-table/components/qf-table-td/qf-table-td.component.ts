import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'td',
  templateUrl: './qf-table-td.component.html',
  styleUrls: ['./qf-table-td.component.scss']
})
export class QfTableTdComponent {
  @Input() qfShowCheckBox: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}
