import {Input, Directive} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Directive()
export class AbstractInput implements ControlValueAccessor {
    public focussed: boolean;
    @Input() public placeholder: string;
    @Input() public required: boolean;
    @Input() public title: string;
    protected _value: any;

    /**
     * Return the mutable input value
     */
    get value() {
        return this._value;
    }

    /**
     * Set the value of the input
     * @param value
     */
    set value(value: any) {
        this._value = value;
        this.onChange(this._value);
        this.onTouched();
    }

    /**
     * Default on change method skeleton
     */
    public onChange: any = () => {
    }

    /**
     * Detection of interaction by user
     */
    public onTouched: any = () => {
    }

    /**
     * Registering a change with the native control
     * @param fn
     */
    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Registering a user interaction with the native control
     * @param fn
     */
    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    /**
     * Provide a disabled state for the control
     * @param isDisabled
     */
    public setDisabledState(isDisabled: boolean): void {
    }

    /**
     * Write the value of the native control
     * @param value
     */
    public writeValue(value: any): void {
        this._value = value;
    }
}
