import {Component, Input} from '@angular/core';

@Component({
  selector: 'sui-tag',
  styleUrls: ['./tag.component.scss'],
  templateUrl: './tag.component.html'
})
export class TagComponent {
  @Input() public title: string;

  constructor() {
  }
}
