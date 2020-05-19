import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumds',
  templateUrl: './breadcrumds.component.html',
  styles: [],
})
export class BreadcrumdsComponent {
  pathTitle: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getRouteData().subscribe((data) => {
      this.pathTitle = data.title;
      this.title.setTitle(data.title);

      const metaTag: MetaDefinition = {
        name: 'descripcion',
        content: this.pathTitle,
      };

      this.meta.updateTag(metaTag);
    });
  }

  getRouteData() {
    return this.router.events.pipe(
      filter((evento) => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
