import { dateData } from './../models/mock-date';
import { DateInterface } from './../models/date.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week6Trainee';

  pyum = [1, 2, 3];

  printDates() {
    if (this.pyum.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}
