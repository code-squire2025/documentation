import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadCrumbsComponent } from '../../../building-blocks/bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'documentation-root',
  template: `
    <bread-crumbs />
    <router-outlet />
  `,
  styles: `
    :host {
      display: block;
      padding: 0 var(--page-padding);
    }
  `,
  standalone: true,
  imports: [RouterOutlet, BreadCrumbsComponent],
})
export class DocumentationRootPage { }
