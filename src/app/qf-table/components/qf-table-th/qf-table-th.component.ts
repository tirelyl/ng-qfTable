import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'th',
  templateUrl: './qf-table-th.component.html',
  styleUrls: ['./qf-table-th.component.scss']
})
export class QfTableThComponent implements OnInit {
  @Input() qfWidth: string;

  constructor() { }

  ngOnInit() {
  }

  resizeColWidth(newWidth: number) {
    this.qfWidth = `${newWidth}px`;
  }

}
