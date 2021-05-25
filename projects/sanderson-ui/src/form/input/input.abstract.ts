import { Input, Directive } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Directive()
export class AbstractInput implements ControlValueAccessor {
  @Input() public placeholder: string;
  @Input() public required: boolean;
  @Input() public title: string;
  public _value: any;

  get value() {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.onChange(this._value);
    this.onTouched();
  }

  public onChange: any = () => {
  }

  public onTouched: any = () => {
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(value: any): void {
    this._value = value;
  }
}
