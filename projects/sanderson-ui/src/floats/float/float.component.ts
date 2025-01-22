import {Component, HostBinding, Input} from '@angular/core';

@Component({
    selector: 'sui-float',
    templateUrl: './float.component.html',
    styleUrls: ['./float.component.scss'],
    standalone: false
})
export class FloatComponent {
    @Input() @HostBinding('class.active') public active: boolean;

    constructor() {
        this.active = false;
    }
}
