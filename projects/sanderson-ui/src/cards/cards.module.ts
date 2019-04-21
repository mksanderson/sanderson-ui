import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardsComponent} from "./cards.component";
import {CardComponent} from "./card/card.component";
import {CardContentComponent} from "./card/card-content/card-content.component";

@NgModule({
  declarations: [
    CardComponent,
    CardContentComponent,
    CardsComponent
  ],
  exports: [
    CardComponent,
    CardContentComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule {
}
