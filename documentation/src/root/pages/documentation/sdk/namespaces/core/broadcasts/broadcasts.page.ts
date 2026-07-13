import { Component } from '@angular/core';
import {
  PageIndexItemComponent
} from '../../../../../../../building-blocks/documentation/page-index/page-index-item/page-index-item.component';
import { PageIndexComponent } from '../../../../../../../building-blocks/documentation/page-index/page-index.component';
import {
  DocumentationShellComponent
} from '../../../../../../../building-blocks/documentation/shell/documentation-shell.component';
import { DocuHeader } from '../../../../../../../building-blocks/documentation/shell/documentation-shell.models';
import { TabGroupComponent } from '../../../../../../../building-blocks/tab-group/tab-group.component';
import { TabComponent } from '../../../../../../../building-blocks/tab-group/tab/tab.component';
import { SdkMenuComponent } from '../../../menu/sdk-menu.component';
import { BroadcastEnrichmentComponent } from './enrich/enrich.component';
import { BroadcastEssentialsComponent } from './essentials/essentials.component';
import { BroadcastMasteryComponent } from './mastery/mastery.component';

@Component({
  selector: 'broadcasts-documentation-page',
  templateUrl: './broadcasts.page.html',
  styleUrl: './broadcasts.page.scss',
  imports: [
    DocumentationShellComponent,
    SdkMenuComponent,
    PageIndexComponent,
    PageIndexItemComponent,
    TabGroupComponent,
    TabComponent,
    BroadcastEssentialsComponent,
    BroadcastMasteryComponent,
    BroadcastEnrichmentComponent
  ],
  standalone: true,
})
export class BroadcastsDocumentationPage {
  protected readonly header: DocuHeader = {
    title: 'Broadcasts',
    subtitle: 'Runtime signals for decoupling systems',
    description: 'Broadcasts let parts of a workspace communicate without hard dependencies, keeping features composable, replaceable, and easy to extend.',
    icon: '✦',
    image: '/images/documentation/sdk/broadcasts.png',
    badges: [
      { label: 'Decoupling', icon: { type: 'lucide', icon: 'chevrons-left-right-ellipsis' }},
      { label: 'Extensibility', icon:  { type: 'lucide', icon: 'blocks' }},
      { label: 'Policies', icon:  { type: 'lucide', icon: 'monitor-cog' }}
    ]
  };
}
