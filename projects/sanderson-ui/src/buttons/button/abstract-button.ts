import { Input, Directive } from '@angular/core';

@Directive()
export class AbstractButton {
  @Input() title: string;
}
