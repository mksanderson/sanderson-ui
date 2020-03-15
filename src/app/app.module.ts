import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SandersonUIModule} from '../../projects/sanderson-ui/src/sanderson-ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SandersonUIModule
  ],
  providers: []
})
export class AppModule {
}
