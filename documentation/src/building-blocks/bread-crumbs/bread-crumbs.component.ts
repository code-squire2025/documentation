import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { BreadCrumb } from './bread-crumbs.models';

@Component({
  selector: 'bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss',
  standalone: true,
  imports: [
    RouterLink
  ]
})
export class BreadCrumbsComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly crumbs = signal<BreadCrumb[]>([]);

  constructor() {
    this.resolveCrumbs();

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => this.resolveCrumbs());
  }

  private resolveCrumbs(): void {
    const crumbs: BreadCrumb[] = [];

    let currentRoute: ActivatedRoute | null = this.route.root;
    let url = '';

    while (currentRoute) {
      const snapshot = currentRoute.snapshot as
        | ActivatedRouteSnapshot
        | undefined;

      if (snapshot) {
        const routeUrl = snapshot.url.map((segment) => segment.path).join('/');

        if (routeUrl) {
          url += `/${routeUrl}`;
        }

        const label = snapshot.data['breadcrumb'] as string | undefined;

        if (routeUrl && label && !this.isDuplicateCrumb(crumbs, label)) {
          crumbs.push({ label, url });
        }
      }

      currentRoute = currentRoute.firstChild;
    }

    this.crumbs.set(crumbs);
  }

  private isDuplicateCrumb(crumbs: BreadCrumb[], label: string): boolean {
    const previous = crumbs.at(-1);

    return previous?.label === label;
  }
}
