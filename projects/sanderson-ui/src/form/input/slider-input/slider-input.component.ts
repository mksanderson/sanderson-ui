import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractInput} from '../input.abstract';

@Component({
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SliderInputComponent)
        }
    ],
    selector: 'sui-slider-input',
    styleUrls: ['./slider-input.component.scss'],
    templateUrl: './slider-input.component.html',
    standalone: false
})
export class SliderInputComponent extends AbstractInput {
  @Input() public max: number;
  @Input() public min: number;
  @Input() public step: number;
}
