import {Component, Input} from '@angular/core';

@Component({
  selector: 'sui-icon',
  styleUrls: [
    './icon.theme.scss',
    './icon.component.scss'
  ],
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() public name: string;

  constructor() {

  }
}
