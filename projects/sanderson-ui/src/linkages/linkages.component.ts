import {AfterContentInit, Component, ContentChildren, QueryList} from "@angular/core";
import {LinkageComponent} from "./linkage/linkage.component";

@Component({
  selector: "linkages",
  styleUrls: ["./linkages.component.scss"],
  templateUrl: "./linkages.component.html"
})
export class LinkagesComponent implements AfterContentInit {
  @ContentChildren(LinkageComponent) public linkages: QueryList<LinkageComponent>;

  constructor() {
    this.linkages = new QueryList<LinkageComponent>();
  }

  ngAfterContentInit(): void {
    // Example to demo the first linkage being active
    // TODO: Remove
    this.linkages.first.active = true;
  }
}
