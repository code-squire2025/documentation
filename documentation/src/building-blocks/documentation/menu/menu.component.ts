import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  signal,
} from '@angular/core';
import { DocumentationCategoryComponent } from './category/category.component';

@Component({
  selector: 'documentation-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class DocumentationMenuComponent implements AfterViewInit {
  @ContentChildren(DocumentationCategoryComponent) private queryList!: QueryList<DocumentationCategoryComponent>;

  public categories = signal<DocumentationCategoryComponent[]>([]);

  public ngAfterViewInit(): void {
    this.categories.set(this.queryList.toArray());

    this.queryList.changes.subscribe(() =>
      this.categories.set(this.queryList.toArray()),
    );
  }
}
