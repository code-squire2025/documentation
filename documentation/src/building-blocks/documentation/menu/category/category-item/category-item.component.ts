import { Component, TemplateRef, ViewChild, input } from '@angular/core';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss',
  standalone: true,
  imports: [],
})
export class DocumentationCategoryItemComponent {
  @ViewChild('blueprint') public blueprint!: TemplateRef<unknown>;

  public active = input<boolean>(false);
}
