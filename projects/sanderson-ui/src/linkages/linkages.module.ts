import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LinkageComponent} from './linkage/linkage.component';
import {LinkagesComponent} from './linkages.component';

@NgModule({
  declarations: [
    LinkageComponent,
    LinkagesComponent
  ],
  exports: [
    LinkageComponent,
    LinkagesComponent
  ]
})
export class LinkagesModule {
}
