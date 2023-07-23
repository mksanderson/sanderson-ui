import {Component, forwardRef} from '@angular/core';
import {AbstractInput} from '../input.abstract';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent)
    }
  ],
  selector: 'sui-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent extends AbstractInput {
  
}
