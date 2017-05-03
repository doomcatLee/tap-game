import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <hr>
    <div>
      <label>Enter Name:</label>
      <input #newName><br>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #newBrand><br>
    </div>
    <div>
      <label>Enter Price:</label>
      <input type="number" #newPrice><br>
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input type="number" #newAlcoholContent><br>
    </div>
    <div>
      <label>Enter IBU:</label>
      <input type="number" #newIbu><br>
    </div>
    <div>
      <label>Enter Amount Remaining:</label>
      <input type="number" #newQuantity><br>
    </div>
    <div>
      <label>Enter Description:</label>
      <input #newDescription /><br>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newIbu.value, newQuantity.value, newDescription.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newIbu.value=''; newQuantity.value=''; newDescription.value='';">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcohol_content: number, ibu: number, quantity: number, description: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcohol_content, ibu, quantity, description);
    this.newKegSender.emit(newKegToAdd);
  }
}
