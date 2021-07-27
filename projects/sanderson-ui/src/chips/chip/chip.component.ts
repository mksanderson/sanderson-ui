import {Component, Input} from '@angular/core';

@Component({
    selector: 'sui-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
    @Input() public title: string;

    constructor() {
        this.title = 'Not provided';
    }
}
