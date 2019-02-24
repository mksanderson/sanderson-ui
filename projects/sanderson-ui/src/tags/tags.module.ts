import {NgModule} from '@angular/core';
import {TagsComponent} from './tags.component';
import {TagComponent} from './tag/tag.component';

@NgModule({
  declarations: [
    TagComponent,
    TagsComponent
  ],
  exports: [
    TagComponent,
    TagsComponent
  ],
})
export class TagsModule { }
