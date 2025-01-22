import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent {
    public destinations: Array<any>;
    public formGroup: FormGroup;

    constructor() {
        this.destinations = new Array<any>({
            code: 'AU',
            title: 'Australia'
        }, {
            code: 'JP',
            title: 'Japan'
        });
        this.formGroup = new FormGroup({
            destinations: new FormControl([this.destinations[0]]),
            slider: new FormControl(2),
            switch: new FormControl(true),
            text: new FormControl('')
        });
        this.formGroup.valueChanges.subscribe(() => {
            console.log(this.formGroup);
        })
    }
}
