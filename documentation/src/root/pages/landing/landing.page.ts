import { Component } from '@angular/core';
import { LandingHeroComponent } from './hero/hero.component';

@Component({
  selector: 'landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  standalone: true,
  imports: [
    LandingHeroComponent
  ]
})
export class LandingPage { }
