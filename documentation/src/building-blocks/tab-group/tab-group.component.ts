import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  input,
  QueryList,
  signal,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'tab-group',
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
  standalone: true,
  imports: [ CommonModule ]
})
export class TabGroupComponent implements AfterViewInit {
  @ContentChildren(TabComponent) private queryList!: QueryList<TabComponent>;

  protected tabs = signal<TabComponent[]>([]);
  protected active = signal<TabComponent | null>(null);

  public ngAfterViewInit(): void {
    this.tabs.set(this.queryList.toArray());
    this.active.set(this.tabs()[0] ?? null);

    this.queryList.changes.subscribe(() => {
      const tabs = this.queryList.toArray();
      const active = this.active();

      this.tabs.set(tabs);

      if (!active || !tabs.includes(active)) {
        this.active.set(this.tabs()[0] ?? null);
      }
    });
  }
}
