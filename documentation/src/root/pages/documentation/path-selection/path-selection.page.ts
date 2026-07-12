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
      { label: 'Core concepts', icon: 'chess-queen' },
      { label: 'Generation', icon: 'file-braces' },
      { label: 'CLIs', icon: 'square-chevron-right' },
      { label: 'Host agnostic forms', icon: 'form' },
      { label: 'IoC & Composition', icon: 'puzzle' },
      { label: 'Broadcasting', icon: 'megaphone' },
      { label: 'Workspaces', icon: 'house' },
      { label: 'and much more!', icon: 'ellipsis' }
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
      { label: 'Angular', icon: 'drafting-compass' },
      { label: 'React', icon: 'atom' },
      { label: 'Vue', icon: 'chevron-down' },
      { label: 'Electron', icon: 'atom' }
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
