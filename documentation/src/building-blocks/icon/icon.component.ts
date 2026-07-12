import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideDynamicIcon, LucideIconInput } from '@lucide/angular';

@Component({
  selector: 'sq-icon',
  template: `
    <svg [lucideIcon]="icon()"
         [size]="size()"
         [color]="color()"
         [strokeWidth]="strokeWidth()"
         [absoluteStrokeWidth]="absoluteStrokeWidth()"
         [title]="title()"/>
  `,
  standalone: true,
  imports: [
    CommonModule,
    LucideDynamicIcon
  ]
})
export class IconComponent {
  public icon = input.required<LucideIconInput>();
  public size = input<number>(20);
  public color = input<string>();
  public strokeWidth = input<number>(2);
  public absoluteStrokeWidth = input<boolean>(false);
  public title = input<string>('');
}
