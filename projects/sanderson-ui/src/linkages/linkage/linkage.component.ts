import {Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: "linkage",
  styleUrls: ["linkage.component.scss"],
  templateUrl: "./linkage.component.html"
})
export class LinkageComponent {
  @HostBinding("class.active") @Input() public active: boolean;
}
