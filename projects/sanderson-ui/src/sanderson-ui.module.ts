import {NgModule} from '@angular/core';
import {ActionsModule} from './actions/actions.module';
import {FormModule} from './form/form.module';
import {GridsModule} from './grids/grids.module';
import {PagesModule} from './pages/pages.module';
import {IconsModule} from './icons/icons.module';
import {TagsModule} from './tags/tags.module';
import {ButtonsModule} from './buttons/buttons.module';
import {LinkagesModule} from './linkages/linkages.module';
import {LoadersModule} from './loaders/loaders.module';
import {CardsModule} from './cards/cards.module';

@NgModule({
  exports: [
    ActionsModule,
    ButtonsModule,
    CardsModule,
    FormModule,
    GridsModule,
    LinkagesModule,
    LoadersModule,
    IconsModule,
    PagesModule,
    TagsModule
  ],
  imports: [
    ActionsModule,
    ButtonsModule,
    CardsModule,
    FormModule,
    GridsModule,
    IconsModule,
    LinkagesModule,
    LoadersModule,
    PagesModule,
    TagsModule
  ]
})
export class SandersonUIModule { }
