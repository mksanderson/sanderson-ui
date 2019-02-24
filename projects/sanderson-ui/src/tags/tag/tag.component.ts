import {Component, Input} from '@angular/core';

@Component({
  selector: 'tag',
  styleUrls: ['./tag.component.scss'],
  templateUrl: './tag.component.html'
})
export class TagComponent {
  @Input() public title: string;

  constructor() {
  }
}
