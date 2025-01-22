import {Component, Input} from '@angular/core';

@Component({
    selector: 'sui-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    standalone: false
})
export class CardsComponent {
    @Input() public title: string;
}
