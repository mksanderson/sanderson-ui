import {Component, ContentChild} from '@angular/core';
import {AbstractButton} from '../abstract-button';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
    selector: 'sui-submit-button',
    templateUrl: './submit-button.component.html',
    styleUrls: ['./submit-button.component.scss'],
    standalone: false
})
export class SubmitButtonComponent extends AbstractButton {
  @ContentChild(IconComponent, /* TODO: add static flag */ {}) public icon: IconComponent;
}
