import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Keg } from "./keg.model";

@Component({
  selector: 'beer-sold',
  template: `

  `
})


export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  
}
