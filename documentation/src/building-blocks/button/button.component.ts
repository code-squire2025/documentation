import { Component, input, output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IconDescription } from '../icon/icon.models';

type Presentation = 'default' | 'cta';

@Component({
  selector: 'sq-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [
    IconComponent
  ]
})
export class ButtonComponent {
  public presentation = input<Presentation>('default');
  public type = input<'button' | 'submit' | 'reset'>('button');
  public disabled = input<boolean>(false);
  public addArrow = input<boolean>(false);
  public icon = input<IconDescription | null>(null);

  public action = output<void>();

  protected onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.action.emit();
  }
}
