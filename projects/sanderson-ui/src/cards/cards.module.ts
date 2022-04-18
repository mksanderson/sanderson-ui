import {NgModule} from '@angular/core';
import {CardsComponent} from './cards.component';
import {CardComponent} from './card/card.component';
import {CardContentComponent} from './card/card-content/card-content.component';

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
    ]
})
export class CardsModule {
}
