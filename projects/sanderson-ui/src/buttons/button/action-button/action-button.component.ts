import {Component, ContentChild} from '@angular/core';
import {AbstractButton} from '../abstract-button';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent extends AbstractButton {
  @ContentChild(IconComponent) public icon: IconComponent;
}
