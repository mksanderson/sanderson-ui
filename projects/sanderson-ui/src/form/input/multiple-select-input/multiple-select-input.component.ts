import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {AbstractInput} from '../input.abstract';

@Component({
    providers: [
        {
            multi: true,
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultipleSelectInputComponent)
        }
    ],
    selector: 'sui-multiple-select-input',
    templateUrl: './multiple-select-input.component.html',
    styleUrls: ['./multiple-select-input.component.scss']
})
export class MultipleSelectInputComponent extends AbstractInput {
    @Input() public options: Array<any>;

    constructor() {
        super();

        this.options = new Array<any>();
    }

    /**
     *
     * @param option
     */
    public add(option: any): void {
        if (this._value.includes(option)) {
            // do not add item to list
        } else {
            this._value.push(option);
            this.value = this._value;
        }
    }

    public focus(): void {
        this.focussed = !this.focussed;
    }

    /**
     *
     * @param option
     */
    public remove(option: any): void {
        if (this._value.includes(option)) {
            this._value.splice(this._value.indexOf(option), 1)
            this.value = this._value;
        }

    }

    /**
     *
     * @param option
     */
    public selected(option: any): boolean {
        return this._value.includes(option);
    }

    /**
     *
     * @param option
     */
    public toggle(option: any): void {
        if (this._value.includes(option)) {
            this.remove(option);
        } else {
            this.add(option);
        }

        console.log(option);
    }
}
