import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatComponent } from './float/float.component';



@NgModule({
    declarations: [
        FloatComponent
    ],
    exports: [
        FloatComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FloatsModule { }
