import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // options: any = {
  //   copy: true
  // }

  constructor(private dragulaService: DragulaService) {

    dragulaService.setOptions('bag-task1', {
      removeOnSpill: true
    });
    // dragulaService.setOptions('bag-task2', {
    //   revertOnSpill: true
    // });
  }
}
