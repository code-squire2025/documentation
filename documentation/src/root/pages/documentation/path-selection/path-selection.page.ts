import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../building-blocks/button/button.component';
import {
  WorkspaceBlockComponent
} from '../../../../building-blocks/documentation/workspace-block/workspace-block.component';
import { WorkspaceBlock } from '../../../../building-blocks/documentation/workspace-block/workspace-block.models';
import { IconComponent } from '../../../../building-blocks/icon/icon.component';
import { SquireSeperatorComponent } from '../../../../building-blocks/squire-seperator/squire-seperator.component';

// routes: {
//   github: {
//     label: 'Github',
//     url: '#',
//     icon: 'code'
//   },
//   documentation: {
//     label: 'Documentation',
//     url: '/documentation/sdk',
//     icon: 'book'
//   }
// },

@Component({
  selector: 'path-selection-page',
  templateUrl: './path-selection.page.html',
  styleUrl: './path-selection.page.scss',
  standalone: true,
  imports: [
    WorkspaceBlockComponent,
    ButtonComponent,
    SquireSeperatorComponent,
    IconComponent
  ]
})
export class PathSelectionPage {
  protected sdk: WorkspaceBlock = {
    header: 'SDK',
    subtitle: 'Squire Development Kit',
    image: '/images/documentation/sdk/sdk_hero.png',
    description: `
      Here you can find anything needed to create and maintain workspaces, however those are ofcourse optional. 
      <span class="seperator"></span>
      This is a toolbox containing solutions and coding patterns for scalability, extensibility and maintainability.
    `,
    badges: [
      { label: 'Core concepts', icon: { type: 'lucide', icon: 'chess-queen' }},
      { label: 'Generation', icon: { type: 'lucide', icon: 'file-braces' }},
      { label: 'CLIs', icon: { type: 'lucide', icon: 'square-chevron-right' }},
      { label: 'Host agnostic forms', icon: { type: 'lucide', icon: 'form' }},
      { label: 'IoC & Composition', icon: { type: 'lucide', icon: 'puzzle' }},
      { label: 'Broadcasting', icon: { type: 'lucide', icon: 'megaphone' }},
      { label: 'Workspaces', icon: { type: 'lucide', icon: 'house' }},
      { label: 'and much more!', icon: { type: 'lucide', icon: 'ellipsis' }}
    ]
  };

  protected thirdParty: WorkspaceBlock = {
    header: 'Third Party',
    subtitle: 'Official integrations & extensions',
    image: '/images/documentation/third-party/tp_hero.png',
    description: ` 
      Here you will find popular frameworks/tools and application types that exist in our rich JavaScript ecosystem.
      <span class="seperator"></span>
      This is where you will find front-end frameworks/libraries, back-end, dev-ops and much more!
    `,
    badges: [
      { label: 'Angular', icon: { type: 'brand', icon: 'angular' }},
      { label: 'React', icon: { type: 'brand', icon: 'react' }},
      { label: 'Vue', icon: { type: 'brand', icon: 'vue' }},
      { label: 'Electron', icon: { type: 'brand', icon: 'electron' }}
    ]
  };

  private router = inject(Router);

  protected openSdkGithub() {}
  protected openSdkDocumentation() {
    void this.router.navigateByUrl('/documentation/sdk/getting-started');
  }

  protected openTpGithub() {}
  protected openTpDocumentation() {}
}
