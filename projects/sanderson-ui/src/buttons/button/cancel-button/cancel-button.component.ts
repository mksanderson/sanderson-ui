import {Component, Input} from '@angular/core';
import {AbstractButton} from '../abstract-button';

@Component({
    selector: 'sui-cancel-button',
    templateUrl: './cancel-button.component.html',
    styleUrls: ['./cancel-button.component.scss'],
    standalone: false
})
export class CancelButtonComponent extends AbstractButton {
  @Input() public icon: string;

  constructor() {
    super();

    this.title = 'Cancel';
  }
}
