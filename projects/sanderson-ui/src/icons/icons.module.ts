import {NgModule} from '@angular/core';
import {IconComponent} from "./icon/icon.component";
import {IconsComponent} from "./icons.component";

@NgModule({
  declarations: [
    IconComponent,
    IconsComponent
  ],
  exports: [
    IconComponent,
    IconsComponent
  ]
})
export class IconsModule {
}
