import { Component, input, output } from '@angular/core';

type Presentation = 'default' | 'cta';

@Component({
  selector: 'sq-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  imports: [],
})
export class ButtonComponent {
  public presentation = input<Presentation>('default');
  public type = input<'button' | 'submit' | 'reset'>('button');
  public disabled = input(false);

  public action = output<void>();

  protected onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.action.emit();
  }
}
