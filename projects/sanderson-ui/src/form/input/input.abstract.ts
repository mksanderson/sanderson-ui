import {Input, Directive} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Directive()
export class AbstractInput implements ControlValueAccessor {
    public focussed: boolean;
    @Input() public placeholder: string;
    @Input() public required: boolean;
    @Input() public title: string;
    public _value: any;

    /**
     *
     */
    get value() {
        return this._value;
    }

    /**
     *
     * @param value
     */
    set value(value: any) {
        this._value = value;
        this.onChange(this._value);
        this.onTouched();
    }

    /**
     *
     */
    public onChange: any = () => {
    }

    /**
     *
     */
    public onTouched: any = () => {
    }

    /**
     *
     * @param fn
     */
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     *
     * @param fn
     */
    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     *
     * @param isDisabled
     */
    public setDisabledState(isDisabled: boolean): void {
    }

    /**
     *
     * @param value
     */
    public writeValue(value: any): void {
        this._value = value;
    }
}
