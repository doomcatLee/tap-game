import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Game</h1>
      <hr>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  `
})

export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Black Butte Porter','Deshutes', 4.00, 5.2, 30, 124, 'Notes of rich chocolate and coffee, a luscious creaminess and a roasted finish.'),
    new Keg('Red Chair NWPA','Deshutes', 4.50, 6.2, 60, 124, 'A citrus punch, bold hop aroma and clean finish.')
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
