import { Routes } from '@angular/router';
import { DocumentationRootPage } from './documentation-root.page';
import { PathSelectionPage } from './path-selection/path-selection.page';
import { sdkRoutes } from './sdk/sdk.routes';

export const documentationRoutes: Routes = [
  {
    path: 'documentation',
    component: DocumentationRootPage,
    data: { breadcrumb: 'Choose path' },
    children: [
      { path: '', component: PathSelectionPage },

      ...sdkRoutes
    ]
  }
];
