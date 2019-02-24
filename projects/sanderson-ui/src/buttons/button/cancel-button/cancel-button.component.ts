import {Component, Input} from '@angular/core';
import {AbstractButton} from '../abstract-button';

@Component({
  selector: 'cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss']
})
export class CancelButtonComponent extends AbstractButton {
  @Input() public icon: string;

  constructor() {
    super();

    this.title = 'Cancel';
  }
}
