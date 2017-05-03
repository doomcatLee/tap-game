import { Component } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Game</h1>
      <hr>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <div>
        <div *ngIf="selectedKeg">
          <h2>{{selectedKeg.name}}</h2>
          <hr>
          <label>Edit Name:</label>
          <input [(ngModel)]="selectedKeg.name" /><br>
          <label>Edit Price:</label>
          <input type="number" [(ngModel)]="selectedKeg.price" /><br>
          <label>Edit Alcohol Content:</label>
          <input type="number" [(ngModel)]="selectedKeg.alcohol_content" /><br>
          <label>Edit IBU:</label>
          <input type="number" [(ngModel)]="selectedKeg.IBU" /><br>
          <label>Edit Amount Remaining:</label>
          <input type="number" [(ngModel)]="selectedKeg.quantity" /><br>
          <label>Edit Description:</label>
          <input [(ngModel)]="selectedKeg.description" /><br>
          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
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
