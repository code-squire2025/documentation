import { Component, effect, input, signal } from '@angular/core';
import { codeToHtml } from 'shiki';

@Component({
  selector: 'syntax-block',
  templateUrl: './syntax-block.component.html',
  styleUrl: './syntax-block.component.scss',
  standalone: true,
  imports: [],
})
export class SyntaxBlockComponent {
  public code = input.required<string>();
  public language = input<string>('typescript');
  public filename = input<string>();

  protected html = signal<string>('');
  protected theme = signal<string>('material-theme-darker');

  constructor() {
    effect(() => this.highlight());
  }

  private async highlight(): Promise<void> {
    const html = await codeToHtml(this.code(), {
      lang: this.language(),
      theme: this.theme()
    });

    this.html.set(html);
  }
}
