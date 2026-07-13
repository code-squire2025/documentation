import { Component, input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <ng-template #blueprint>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TabComponent {
  @ViewChild('blueprint') blueprint!: TemplateRef<unknown>;

  public label = input.required<string>();
}
