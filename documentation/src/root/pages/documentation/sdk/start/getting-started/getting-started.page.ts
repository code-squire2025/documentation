import { Component } from '@angular/core';
import {
  PageIndexItemComponent
} from '../../../../../../building-blocks/documentation/page-index/page-index-item/page-index-item.component';
import { PageIndexComponent } from '../../../../../../building-blocks/documentation/page-index/page-index.component';
import {
  DocumentationShellComponent
} from '../../../../../../building-blocks/documentation/shell/documentation-shell.component';
import { SdkMenuComponent } from '../../menu/sdk-menu.component';

@Component({
  selector: 'getting-started',
  templateUrl: './getting-started.page.html',
  styleUrl: './getting-started.page.scss',
  standalone: true,
  imports: [
    SdkMenuComponent,
    DocumentationShellComponent,
    PageIndexComponent,
    PageIndexItemComponent
  ]
})
export class GettingStartedPage { }
