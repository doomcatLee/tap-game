import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <hr>
    <div>
      <label>Enter Name:</label>
      <input class="form-control" #newName><br>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input class="form-control" #newBrand><br>
    </div>
    <div>
      <label>Enter Price:</label>
      <input class="form-control" type="number" #newPrice><br>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input class="form-control" type="number" #newAlcoholContent><br>
    </div>
    <div>
      <label>Enter IBU:</label>
      <input class="form-control" type="number" #newIbu><br>
    </div>
    <div>
      <label>Enter Amount Remaining:</label>
      <input class="form-control" type="number" #newQuantity><br>
    </div>
    <div>
      <label>Enter Description:</label>
      <input class="form-control" #newDescription /><br>
    </div>
    <div>
      <label>Enter Type:</label>
      <input class="form-control" #newType><br>
    </div>
    <button class="btn btn-default" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newIbu.value, newQuantity.value, newDescription.value, newType.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newIbu.value=''; newQuantity.value=''; newDescription.value=''; newType.value='';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcohol_content: number, ibu: number, quantity: number, description: string, type: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol_content, ibu, quantity, description, type);
    this.newKegSender.emit(newKegToAdd);
  }
}
