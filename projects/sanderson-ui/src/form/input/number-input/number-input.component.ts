import {Component, forwardRef} from '@angular/core';
import {AbstractInput} from '../input.abstract';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberInputComponent)
        }
    ],
    selector: 'sui-number-input',
    templateUrl: './number-input.component.html',
    styleUrls: ['./number-input.component.scss'],
    standalone: false
})
export class NumberInputComponent extends AbstractInput {

}
