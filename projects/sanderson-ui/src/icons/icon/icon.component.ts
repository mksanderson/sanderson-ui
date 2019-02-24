import {Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: "icon",
  styleUrls: ["./icon.component.scss"],
  templateUrl: "./icon.component.html"
})
export class IconComponent {
  @Input() public name: string;

  constructor() {

  }
}
