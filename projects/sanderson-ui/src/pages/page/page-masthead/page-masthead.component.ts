import {Component, Input} from '@angular/core';

@Component({
    selector: 'sui-page-masthead',
    styleUrls: ['./page-masthead.component.scss'],
    templateUrl: './page-masthead.component.html',
    standalone: false
})
export class PageMastheadComponent {
  @Input() public title: string;
}
