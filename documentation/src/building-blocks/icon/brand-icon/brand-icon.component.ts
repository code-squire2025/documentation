import { Component, input } from '@angular/core';
import { BrandIcon } from './brand-icon.models';

@Component({
  selector: 'brand-icon',
  templateUrl: './brand-icon.component.html',
  styleUrl: './brand-icon.component.scss',
  standalone: true,
  imports: [ ]
})
export class BrandIconComponent {
  public icon = input<BrandIcon>();
  public size = input<number>(20);
  public color = input<string>();
}
