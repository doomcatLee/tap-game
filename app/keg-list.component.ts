import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All Kegs</option>
    <option value="lowKeg" (click)="showLowKeg()">Low Kegs</option>
  </select>
  <div *ngIf="filterByMaster==='all'">
    <div class="panel panel-default" *ngFor="let currentKeg of childKegList | masterPipe:filterByMaster">
      <div class="panel-heading">{{currentKeg.name}}</div>
      <div class="panel-body">
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: $ {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcohol_content}}</li>
        <li>IBU: {{currentKeg.ibu}}</li>
        <li>Description: {{currentKeg.description}}</li>
        <li>Quantity Remaining: {{currentKeg.quantity}}</li>
      </ul>

        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster==='lowKeg'">
    <div class="panel panel-default" *ngFor="let currentKeg of childKegList | masterPipe:filterByMaster">
      <div class="panel-heading">{{currentKeg.name}}</div>
      <div class="panel-body">
      <ul>
        <li>Brand: {{currentKeg.brand}}</li>
        <li>Price: $ {{currentKeg.price}}</li>
        <li>Alcohol Content: {{currentKeg.alcohol_content}}</li>
        <li>IBU: {{currentKeg.ibu}}</li>
        <li>Description: {{currentKeg.description}}</li>
        <li>Quantity Remaining: {{currentKeg.quantity}}</li>
      </ul>

        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByMaster = 'all';

  onChange(optionFromMenu) {
    this.filterByMaster = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
