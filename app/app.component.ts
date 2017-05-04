import { Component } from '@angular/core';
import { Keg } from './keg.model';



@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html'
})

export class AppComponent {
  selectedKeg = null;
  lowKegClick = false;


  masterKegList: Keg[] = [
    new Keg('Black Butte Porter','Deshutes', 4.00, 5.2, 30, 124, 'Notes of rich chocolate and coffee, a luscious creaminess and a roasted finish.', 'Porter'),
    new Keg('Red Chair NWPA','Deshutes', 4.50, 6.2, 60, 124, 'A citrus punch, bold hop aroma and clean finish.', 'IPA'),
    new Keg('Test','Testing', 4.50, 6.2, 60, 9, 'Test beer for testing.', 'Stout'),
    new Keg('Test2','Testing2', 5, 4.2, 35, 32, 'Test beer for testing 2.', 'ALE'),
    new Keg('Test3','Testing3', 5.50, 8.2, 85, 42, 'Test beer for testing 3.', 'ale'),
    new Keg('Test4','Testing4', 6.50, 10.2, 20, 8, 'Test beer for testing 4.', 'PORTER')
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
