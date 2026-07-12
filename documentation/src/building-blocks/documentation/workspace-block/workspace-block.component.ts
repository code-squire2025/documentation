import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IconComponent } from '../../icon/icon.component';
import { WorkspaceBlock } from './workspace-block.models';

@Component({
  selector: 'workspace-block',
  templateUrl: './workspace-block.component.html',
  styleUrl: './workspace-block.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent
  ]
})
export class WorkspaceBlockComponent {
  public block = input.required<WorkspaceBlock>();
}
