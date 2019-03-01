import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'action',
  styleUrls: [
    './action.theme.scss',
    './action.component.scss'
  ],
  templateUrl: './action.component.html'
})
export class ActionComponent {
  @Input() @HostBinding('class.active') public active: boolean;

  constructor() {
  }
}
