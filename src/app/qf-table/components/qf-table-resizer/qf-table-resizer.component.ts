import { Component, OnInit, HostBinding, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { QfTableComponent } from '../qf-table/qf-table.component';

@Component({
  selector: '[qf-table-resizer]',
  template: ` 
    <div class="notch"></div>
  `,
  styles: [`
    :host {
      position: absolute;
      right: 0;
      top: 0;
      width: 5px;
      height: 100%;
      cursor: col-resize;
    }
    .notch {
      width: 100%;
      height: 50%;
      transform: translateY(50%);
      background-color: #f5f5f7;
    }
  `]
})
export class QfTableResizerComponent implements OnInit {
  subscription: Subscription;

  @Output() qfOnResize = new EventEmitter<any>();

  @HostBinding('attr.title')
  get title(): string {
    return '拖动改变表格列宽';
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(e: MouseEvent) {
    e.preventDefault();
    console.log(e);
    console.log(this.getActualParentWidth());
    console.log(e.clientX);
    const initWidth = this.getActualParentWidth();
    const initClientX = e.clientX;
    const mouseup = Observable.fromEvent(document, 'mouseup');
    this.subscription = mouseup
      .subscribe((e: MouseEvent) => {
        console.log('aaa');
        if (this.subscription && !this.subscription.closed) {
          this.unsubscribeSubs();
        }
      });
    const mouseMoveSub = Observable.fromEvent(document, 'mousemove')
      .takeUntil(mouseup)
      .subscribe((e: MouseEvent) => {
        console.log('bbb');
        this.onMove(e, initWidth, initClientX);
      });
    this.subscription.add(mouseMoveSub);
  }

  onMove(event: MouseEvent, initWidth: number, initClientX: number) {
    const movementX = event.clientX - initClientX;
    const newWidth = initWidth + movementX;
    this.qfOnResize.emit(newWidth);
  }

  private getActualParentWidth(): number {
    return this.el.nativeElement.parentElement.offsetWidth;
  }

  private unsubscribeSubs() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
  }

}
