import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "masterPipe",
  pure: false
})


export class MasterPipe implements PipeTransform {

  transform(input: Keg[], desiredMaster){
    var output: Keg[] = [];
    if (desiredMaster === "all") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
    } else if (desiredMaster === "lowKeg") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].quantity < 10) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }

}
