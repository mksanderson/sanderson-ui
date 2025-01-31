import {Component, ContentChild} from '@angular/core';
import {AbstractButton} from '../abstract-button';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
    selector: 'sui-action-button',
    templateUrl: './action-button.component.html',
    styleUrls: ['./action-button.component.scss'],
    standalone: false
})
export class ActionButtonComponent extends AbstractButton {
  @ContentChild(IconComponent, /* TODO: add static flag */ {}) public icon: IconComponent;
}
