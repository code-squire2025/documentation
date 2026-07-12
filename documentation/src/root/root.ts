import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../building-blocks/footer/footer.component';
import { HeaderComponent } from '../building-blocks/header/header.component';

@Component({
  selector: 'root',
  template: `
    <sq-header/>
    <router-outlet/>
    <sq-footer/>
  `,
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class Root { }
