import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { NewKegComponent } from './new-keg.component';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">All Kegs</option>
    <option value="lowKeg" (click)="showLowKeg()">Low Kegs</option>
    <option value="porter" (click)="showLowKeg()">Porter</option>
    <option value="stout" (click)="showLowKeg()">Stout</option>
    <option value="ipa" (click)="showLowKeg()">IPA</option>
    <option value="ale" (click)="showLowKeg()">Ale</option>
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
        <button (click)="sellBeer(currentKeg)">SellSellSell!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster ==='lowKeg'">
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster==='ipa'">
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster==='stout'">
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster==='porter'">
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  <div *ngIf="filterByMaster==='ale'">
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
        <li>Type: {{currentKeg.type}}</li>
      </ul>
        <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByMaster = 'all';

  sellBeer(currentBeer) {
    if (!(currentBeer.quantity <= 0)){
      currentBeer.quantity -= 1;
    }else{
      alert("Your out of" + currentBeer.name+"!");
    }
  }

  onChange(optionFromMenu) {
    this.filterByMaster = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
