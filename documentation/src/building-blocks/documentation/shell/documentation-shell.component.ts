import { Component, input } from '@angular/core';
import { DocuHeader } from './documentation-shell.models';

export interface DocumentationHeroBadge {
  label: string;
  icon: string;
}

@Component({
  selector: 'documentation-shell',
  templateUrl: './documentation-shell.component.html',
  styleUrl: './documentation-shell.component.scss',
  standalone: true,
})
export class DocumentationShellComponent {
  public readonly header = input<DocuHeader>();
}
