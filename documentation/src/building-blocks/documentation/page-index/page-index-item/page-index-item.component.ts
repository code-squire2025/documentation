import { Component, input } from '@angular/core';

@Component({
  selector: 'page-index-item',
  template: ``
})
export class PageIndexItemComponent {
  public hash = input.required<string>();
  public label = input.required<string>();
}
