import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public formGroup: FormGroup;

    constructor() {
        this.formGroup = new FormGroup({
            slider: new FormControl(2),
            switch: new FormControl(true),
            text: new FormControl('')
        });
    }
}
