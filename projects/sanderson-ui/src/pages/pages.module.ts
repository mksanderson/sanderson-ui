import {NgModule} from '@angular/core';
import {PageComponent} from './page/page.component';
import {PageAsideComponent} from './page/page-aside/page-aside.component';
import {PageFrameComponent} from './page/page-frame/page-frame.component';
import {PageMastheadComponent} from './page/page-masthead/page-masthead.component';
import {PageViewComponent} from './page/page-view/page-view.component';
import {PageWindowComponent} from './page/page-window/page-window.component';
import {IconsModule} from '../icons/icons.module';

@NgModule({
  declarations: [
    PageComponent,
    PageAsideComponent,
    PageFrameComponent,
    PageMastheadComponent,
    PageViewComponent,
    PageWindowComponent
  ],
  exports: [
    PageComponent,
    PageAsideComponent,
    PageFrameComponent,
    PageMastheadComponent,
    PageViewComponent,
    PageWindowComponent
  ],
  imports: [
    IconsModule
  ]
})
export class PagesModule { }
