import {NgModule} from '@angular/core';
import {NumberInputComponent} from './input/number-input/number-input.component';
import {SelectInputComponent} from './input/select-input/select-input.component';
import {TextInputComponent} from './input/text-input/text-input.component';
import {IconsModule} from '../icons/icons.module';
import {ActionsModule} from '../actions/actions.module';
import {FormComponent} from './form.component';
import {FormFieldsComponent} from './form-fields/form-fields.component';
import {FormFieldComponent} from './form-fields/form-field/form-field.component';
import {FormButtonsComponent} from './form-buttons/form-buttons.component';
import {ButtonsModule} from '../buttons/buttons.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordInputComponent} from './input/password-input/password-input.component';
import {SwitchInputComponent} from './input/switch-input/switch-input.component';
import {SliderInputComponent} from './input/slider-input/slider-input.component';
import {EmailInputComponent} from './input/email-input/email-input.component';

@NgModule({
  declarations: [
    EmailInputComponent,
    FormComponent,
    FormButtonsComponent,
    FormFieldComponent,
    FormFieldsComponent,
    NumberInputComponent,
    SelectInputComponent,
    TextInputComponent,
    PasswordInputComponent,
    SwitchInputComponent,
    SliderInputComponent
  ],
  exports: [
    EmailInputComponent,
    FormComponent,
    FormButtonsComponent,
    FormFieldComponent,
    FormFieldsComponent,
    NumberInputComponent,
    PasswordInputComponent,
    SelectInputComponent,
    ReactiveFormsModule,
    TextInputComponent,
    SliderInputComponent,
    SwitchInputComponent
  ],
  imports: [
    ActionsModule,
    ButtonsModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class FormModule {
}
