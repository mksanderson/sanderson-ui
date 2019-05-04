import {Component, Input} from '@angular/core';
import {PageService} from './page.service';

@Component({
  selector: 'page',
  styleUrls: [
    './page.component.scss',
    './page.theme.scss'
  ],
  templateUrl: './page.component.html'
})
export class PageComponent {
  @Input() public loading: boolean;

  constructor(private pageService: PageService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.pageService.loading$.subscribe((loading) => {
      this.loading = loading;
    });
  }
}
