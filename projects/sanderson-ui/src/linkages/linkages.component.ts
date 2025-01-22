import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {LinkageComponent} from './linkage/linkage.component';

@Component({
    selector: 'sui-linkages',
    styleUrls: ['./linkages.component.scss'],
    templateUrl: './linkages.component.html',
    standalone: false
})
export class LinkagesComponent {
  @ContentChildren(LinkageComponent) public linkages: QueryList<LinkageComponent>;

  constructor() {
    this.linkages = new QueryList<LinkageComponent>();
  }
}
