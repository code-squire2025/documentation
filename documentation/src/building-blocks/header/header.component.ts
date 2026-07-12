import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sq-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class HeaderComponent { }
