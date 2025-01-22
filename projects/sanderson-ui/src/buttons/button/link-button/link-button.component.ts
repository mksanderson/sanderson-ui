import {Component, Input} from '@angular/core';
import {AbstractButton} from '../abstract-button';

@Component({
    selector: 'sui-link-button',
    templateUrl: './link-button.component.html',
    styleUrls: ['./link-button.component.scss'],
    standalone: false
})
export class LinkButtonComponent extends AbstractButton {
  @Input() public link: string;
}
