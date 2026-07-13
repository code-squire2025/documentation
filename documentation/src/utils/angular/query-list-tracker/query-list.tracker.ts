import { QueryList } from '@angular/core';

export interface QueryListChange<T> {
  current: T[];
  previous: T[];
  added: T[];
  removed: T[];
}

export class QueryListTracker<T> {
  private previous: T[] = [];

  public update(queryList: QueryList<T>): QueryListChange<T> {
    const current = queryList.toArray();
    const previous = this.previous;
    const added = current.filter(item => !previous.includes(item));
    const removed = previous.filter(item => !current.includes(item));

    this.previous = current;

    return { current, previous, added, removed };
  }
}
