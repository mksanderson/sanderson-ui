import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipsComponent} from './chips.component';
import {ChipComponent} from './chip/chip.component';
import {IconsModule} from "../icons/icons.module";
import {ButtonsModule} from "../buttons/buttons.module";

@NgModule({
    declarations: [
        ChipsComponent,
        ChipComponent
    ],
    exports: [
        ChipComponent,
        ChipsComponent
    ],
    imports: [
        CommonModule,
        IconsModule,
        ButtonsModule
    ]
})
export class ChipsModule {
}
