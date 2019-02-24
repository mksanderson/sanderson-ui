import {NgModule} from '@angular/core';
import {ButtonsComponent} from './buttons.component';
import {ActionButtonComponent} from './button/action-button/action-button.component';
import {CancelButtonComponent} from './button/cancel-button/cancel-button.component';
import {IconButtonComponent} from './button/icon-button/icon-button.component';
import {LinkButtonComponent} from './button/link-button/link-button.component';
import {SubmitButtonComponent} from './button/submit-button/submit-button.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ActionButtonComponent,
    ButtonsComponent,
    CancelButtonComponent,
    IconButtonComponent,
    LinkButtonComponent,
    SubmitButtonComponent
  ],
  exports: [
    ActionButtonComponent,
    ButtonsComponent,
    CancelButtonComponent,
    IconButtonComponent,
    LinkButtonComponent,
    SubmitButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ButtonsModule {
}
