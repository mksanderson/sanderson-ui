import {Component, forwardRef} from '@angular/core';
import {AbstractInput} from '../input.abstract';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextInputComponent)
        }
    ],
    selector: 'sui-text-input',
    styleUrls: ['./text-input.component.scss'],
    templateUrl: './text-input.component.html',
    standalone: false
})
export class TextInputComponent extends AbstractInput {
    
}
