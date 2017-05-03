import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h2>{{childSelectedKeg.name}}</h2>
      <hr>
      <label>Edit Name:</label>
      <input [(ngModel)]="childSelectedKeg.name" /><br>
      <label>Edit Price:</label>
      <input type="number" [(ngModel)]="childSelectedKeg.price" /><br>
      <label>Edit Alcohol Content:</label>
      <input type="number" [(ngModel)]="childSelectedKeg.alcohol_content" /><br>
      <label>Edit IBU:</label>
      <input type="number" [(ngModel)]="childSelectedKeg.ibu" /><br>
      <label>Edit Amount Remaining:</label>
      <input type="number" [(ngModel)]="childSelectedKeg.quantity" /><br>
      <label>Edit Description:</label>
      <input [(ngModel)]="childSelectedKeg.description" /><br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
