import {Component, ContentChild} from '@angular/core';
import {IconComponent} from '../../../icons/icon/icon.component';

@Component({
  selector: 'sui-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @ContentChild(IconComponent, /* TODO: add static flag */ {}) public icon: IconComponent;
}
