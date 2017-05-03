import { Component } from '@angular/core';
import { Keg } from './keg.model';



@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header">
          <a href="/"><img src="./resources/images/icon.png" id="home-icon" /></a>
        </div>
      </div>
    </nav>
    <div class="container">
      <h1>Tap Game</h1>
      <hr>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <hr>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
    </div>
  `
})

export class AppComponent {
  selectedKeg = null;
  lowKegClick = false;


  masterKegList: Keg[] = [
    new Keg('Black Butte Porter','Deshutes', 4.00, 5.2, 30, 124, 'Notes of rich chocolate and coffee, a luscious creaminess and a roasted finish.'),
    new Keg('Red Chair NWPA','Deshutes', 4.50, 6.2, 60, 124, 'A citrus punch, bold hop aroma and clean finish.'),
    new Keg('Test','Testing', 4.50, 6.2, 60, 9, 'Test beer for testing.')
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}
