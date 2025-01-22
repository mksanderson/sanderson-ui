import {Component, ContentChildren, HostBinding} from '@angular/core';
import {LinkagesComponent} from '../../../linkages/linkages.component';

@Component({
    selector: 'sui-page-frame',
    styleUrls: [
        './page-frame.component.scss',
        './page-frame.theme.scss'
    ],
    templateUrl: './page-frame.component.html',
    standalone: false
})
export class PageFrameComponent {
    @ContentChildren(LinkagesComponent) @HostBinding('class.linkages') public linkages: LinkagesComponent;
}
