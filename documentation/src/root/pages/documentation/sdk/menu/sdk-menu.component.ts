import { Component, inject, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, isActive } from '@angular/router';
import {
  DocumentationCategoryItemComponent
} from '../../../../../building-blocks/documentation/menu/category/category-item/category-item.component';
import {
  DocumentationCategoryComponent
} from '../../../../../building-blocks/documentation/menu/category/category.component';
import { DocumentationMenuComponent } from '../../../../../building-blocks/documentation/menu/menu.component';

@Component({
  selector: 'sdk-menu',
  templateUrl: './sdk-menu.component.html',
  styleUrl: './sdk-menu.component.scss',
  standalone: true,
  imports: [
    DocumentationMenuComponent,
    DocumentationCategoryComponent,
    DocumentationCategoryItemComponent,
    RouterLink,
    RouterLinkActive
  ]
})
export class SdkMenuComponent {
  private router = inject(Router);

  protected isActive(url: string): Signal<boolean> {
    return isActive(url, this.router, {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored'
    });
  }
}
