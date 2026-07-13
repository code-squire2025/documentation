import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';
import { BrandIconComponent } from './brand-icon/brand-icon.component';
import { IconDescription } from './icon.models';

@Component({
  selector: 'sq-icon',
  templateUrl: './icon.component.html',
  standalone: true,
  imports: [
    CommonModule,
    LucideDynamicIcon,
    BrandIconComponent
  ]
})
export class IconComponent {
  public icon = input.required<IconDescription>();
  public size = input<number>(20);
  public color = input<string>();
  public title = input<string>('');
}
