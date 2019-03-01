import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent {
  @Input() @HostBinding('class.active') public active: boolean;

  constructor() {
  }
}
