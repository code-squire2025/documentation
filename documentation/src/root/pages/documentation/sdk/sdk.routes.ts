import { Routes } from '@angular/router';
import { BroadcastsDocumentationPage } from './namespaces/core/broadcasts/broadcasts.page';
import { GettingStartedPage } from './start/getting-started/getting-started.page';
import { LoadoutsPage } from './start/loadouts/loadouts.page';
import { SettingUpPage } from './start/setting-up/setting-up.page';

export const sdkRoutes: Routes = [
  {
    path: 'sdk',
    data: { breadcrumb: 'SDK' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'getting-started' },

      // START
      {
        path: 'getting-started',
        data: { breadcrumb: 'getting started' },
        component: GettingStartedPage
      },
      {
        path: 'setting-up',
        data: { breadcrumb: 'setting up' },
        component: SettingUpPage
      },
      {
        path: 'loadouts',
        data: { breadcrumb: 'loadouts' },
        component: LoadoutsPage
      },

      // CORE
      {
        path: 'broadcasts',
        data: { breadcrumb: 'Broadcasts' },
        component: BroadcastsDocumentationPage
      },
    //   {
    //     path: 'common',
    //     data: { breadcrumb: 'common' },
    //     component: CommonDocumentationPage
    //   },
    //   {
    //     path: 'composition',
    //     data: { breadcrumb: 'composition' },
    //     component: CompositionDocumentationPage
    //   },
    //   {
    //     path: 'envoy',
    //     data: { breadcrumb: 'envoy' },
    //     component: EnvoyDocumentationPage
    //   },
    //   {
    //     path: 'ioc',
    //     data: { breadcrumb: 'ioc' },
    //     component: IocDocumentationPage
    //   },
    //
    //   // NODE
    //   {
    //     path: 'vfs',
    //     data: { breadcrumb: 'vfs' },
    //     component: VfsDocumentationPage
    //   },
    //
    //   // TOOLS
    //   {
    //     path: 'logger',
    //     data: { breadcrumb: 'logger' },
    //     component: LoggerDocumentationPage
    //   },
    //   {
    //     path: 'template-engine',
    //     data: { breadcrumb: 'template-engine' },
    //     component: TemplateEngineDocumentationPage
    //   }
    ]
  }
];
