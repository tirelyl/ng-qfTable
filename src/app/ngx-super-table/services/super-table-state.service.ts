import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { SuperTableColumn, ColumnState, SORT_ORDER } from '../models/interfaces';

const sortCycle: SORT_ORDER[] = ['ASC', 'DESC', undefined];
const getNextSortOrder: Function = function(currentSortOrder: SORT_ORDER): SORT_ORDER {
  const nextIndex: number = (sortCycle.indexOf(currentSortOrder) + 1) % sortCycle.length;
  return sortCycle[nextIndex];
};

@Injectable()
export class SuperTableState {

  // publicly exposed properties
  hasAnyFilters = false;
  columns: ColumnState[];
  sortStack: ColumnState[] = [];
  stateChanged$: Observable<SuperTableState>;

  // source of observable
  private stateChangedSource: BehaviorSubject<SuperTableState> = new BehaviorSubject<SuperTableState>(this);

  constructor() {
    this.stateChanged$ = this.stateChangedSource.asObservable();
  }

  public setColumns(columns: Array<SuperTableColumn>) {
    this.columns = columns.map(c => {
      if (!!c.filter) {
        this.hasAnyFilters = true;
      }
      return {
        id: c.id,
        filterValue: undefined,
        sortOrder: undefined,
        isHidden: false,
        width: c.width || undefined,
        def: c,
        hasSort: !! c.sort,
        hasFilter: !!c.filter
      };
    });
  }

  toggleSort(colState: ColumnState, doNotClear: boolean) {

    // Set next sort order
    colState.sortOrder = getNextSortOrder(colState.sortOrder);

    // Check if we are clearing the rest of the sort stack or not
    if (doNotClear) {
      const curIndex: number = this.sortStack.indexOf(colState);
      if (curIndex === -1) {
        this.sortStack.push(colState);
      } else if (!colState.sortOrder) {
        this.sortStack.splice(curIndex, 1);
      }
    } else {
      this.sortStack = colState.sortOrder ? [colState] : [];
      this.columns.forEach((column) => {
        if (column !== colState) {
          column.sortOrder = undefined;
        }
      });
    }

    this.notify();
  }

  notify() {
    this.stateChangedSource.next(this);
  }

}
