import {Component} from '@angular/core';

@Component({
  selector: 'page',
  styleUrls: [
    './page.component.scss',
    './page.theme.scss'
  ],
  templateUrl: './page.component.html'
})
export class PageComponent {
  public loaded: boolean;

  constructor() {
    this.loaded = false;
  }
}
