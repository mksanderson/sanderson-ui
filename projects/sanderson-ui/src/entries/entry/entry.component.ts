import {Component, Input} from '@angular/core';

@Component({
  selector: 'entry',
  styleUrls: ['./entry.component.scss'],
  templateUrl: './entry.component.html'
})
export class EntryComponent {
  @Input() public title: string;

  constructor() {
  }
}
