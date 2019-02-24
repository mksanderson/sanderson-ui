import {NgModule} from '@angular/core';
import {GridComponent} from './grid/grid.component';
import {ActionsModule} from '../actions/actions.module';
import {TagsModule} from '../tags/tags.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ],
  imports: [
    ActionsModule,
    TagsModule
  ]
})
export class GridsModule {
}
