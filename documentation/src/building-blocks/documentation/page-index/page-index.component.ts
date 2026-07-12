import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  signal,
} from '@angular/core';
import { PageIndexItemComponent } from './page-index-item/page-index-item.component';

@Component({
  selector: 'page-index',
  templateUrl: './page-index.component.html',
  styleUrl: './page-index.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class PageIndexComponent implements AfterViewInit {
  @ContentChildren(PageIndexItemComponent) private queryList!: QueryList<PageIndexItemComponent>;

  protected items = signal<PageIndexItemComponent[]>([]);

  public ngAfterViewInit(): void {
    this.items.set(this.queryList.toArray());
    this.queryList.changes.subscribe(() => this.items.set(this.queryList.toArray()));
  }
}
