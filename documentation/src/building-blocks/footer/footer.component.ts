import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterSection, SocialLink } from './footer.models';

@Component({
  selector: 'sq-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class FooterComponent {
  protected readonly sections: FooterSection[] = [
    {
      icon: '▤',
      title: 'Documentation',
      links: [
        { label: 'Overview', route: '/documentation' },
        { label: 'SDK Workspace', route: '/documentation/sdk' },
        { label: 'Third Party Workspace', route: '/documentation/third-party' },
        { label: 'Guides', route: '/documentation/guides' },
        { label: 'API Reference', route: '/documentation/api' },
      ],
    },
    {
      icon: '♚',
      title: 'Community',
      links: [
        { label: 'Discord', href: '#', external: true },
        { label: 'Discussions', href: '#', external: true },
        { label: 'Blog', route: '/blog' },
        { label: 'Events', route: '/events' },
      ],
    },
    {
      icon: '⬡',
      title: 'About',
      links: [
        { label: 'About Code Squire', route: '/about' },
        { label: 'Roadmap', route: '/roadmap' },
        { label: 'Changelog', route: '/changelog' },
        { label: 'License', route: '/license' },
      ],
    },
    {
      icon: '⬢',
      title: 'Resources',
      links: [
        { label: 'GitHub', href: '#', external: true },
        { label: 'Templates', route: '/templates' },
        { label: 'Example Projects', route: '/examples' },
        { label: 'Status', route: '/status', status: true },
      ],
    },
  ];

  protected readonly socials: SocialLink[] = [
    { label: 'GitHub', icon: '◖', href: '#' },
    { label: 'Discord', icon: '☯', href: '#' },
    { label: 'X', icon: '𝕏', href: '#' },
    { label: 'YouTube', icon: '▶', href: '#' },
    { label: 'LinkedIn', icon: 'in', href: '#' },
  ];
}

