import {Component, ContentChild} from '@angular/core';
import {AbstractButton} from '../abstract-button';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
  selector: 'submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent extends AbstractButton {
  @ContentChild(IconComponent) public icon: IconComponent;
}
