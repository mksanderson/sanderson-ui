import {NgModule} from '@angular/core';
import {EntriesComponent} from './entries.component';
import {EntryComponent} from './entry/entry.component';

@NgModule({
  declarations: [
    EntryComponent,
    EntriesComponent
  ],
  exports: [
    EntryComponent,
    EntriesComponent
  ],
})
export class EntriesModule {
}
