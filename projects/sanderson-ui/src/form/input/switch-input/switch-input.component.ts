import {Component, forwardRef, HostBinding} from '@angular/core';
import {AbstractInput} from "../input.abstract";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchInputComponent)
    }
  ],
  selector: 'switch-input',
  styleUrls: ['./switch-input.component.scss'],
  templateUrl: './switch-input.component.html'
})
export class SwitchInputComponent extends AbstractInput {
  @HostBinding('class.checked') public _value: boolean;
}
