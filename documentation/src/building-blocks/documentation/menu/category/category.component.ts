import {
  AfterViewInit,
  Component,
  ContentChildren,
  QueryList,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { DocumentationCategoryItemComponent } from './category-item/category-item.component';

@Component({
  selector: 'documentation-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  standalone: true,
  imports: [],
})
export class DocumentationCategoryComponent implements AfterViewInit {
  @ContentChildren(DocumentationCategoryItemComponent) private queryList!: QueryList<DocumentationCategoryItemComponent>;
  @ViewChild('blueprint') public blueprint!: TemplateRef<unknown>;

  public items = signal<DocumentationCategoryItemComponent[]>([]);

  public ngAfterViewInit(): void {
    this.items.set(this.queryList.toArray());

    this.queryList.changes.subscribe(() =>
      this.items.set(this.queryList.toArray())
    );
  }
}
