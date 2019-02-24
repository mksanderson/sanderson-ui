import {NgModule} from '@angular/core';
import {ActionsModule} from './actions/actions.module';
import {FormModule} from './form/form.module';
import {GridsModule} from './grids/grids.module';
import {PagesModule} from './pages/pages.module';
import {IconsModule} from './icons/icons.module';
import {TagsModule} from './tags/tags.module';
import {EntriesModule} from './entries/entries.module';
import {ButtonsModule} from './buttons/buttons.module';
import {LinkagesModule} from './linkages/linkages.module';
import {LoadersModule} from './loaders/loaders.module';

@NgModule({
  exports: [
    ActionsModule,
    ButtonsModule,
    EntriesModule,
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
    EntriesModule,
    FormModule,
    GridsModule,
    IconsModule,
    LinkagesModule,
    LoadersModule,
    PagesModule,
    TagsModule
  ],
})
export class SandersonUIModule { }
