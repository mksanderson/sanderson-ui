import {NgModule} from '@angular/core';
import {ActionsComponent} from './actions.component';
import {ActionComponent} from './action/action.component';

@NgModule({
  declarations: [
    ActionComponent,
    ActionsComponent
  ],
  exports: [
    ActionComponent,
    ActionsComponent
  ]
})
export class ActionsModule {
}
