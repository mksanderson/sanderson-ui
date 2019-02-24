import {Component, ContentChild} from '@angular/core';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @ContentChild(IconComponent) public icon: IconComponent;
}
