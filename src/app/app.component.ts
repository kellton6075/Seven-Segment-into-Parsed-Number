import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marco-polo';

  constructor() {
  }

  getDigit(pattern) {
    let val;
    switch (pattern) {
        case ' _ | ||_|':
            val = 0;
            break;
        case '     |  |':
            val = 1;
            break;
        case ' _  _||_ ':
            val = 2;
            break;
        case ' _  _| _|':
            val = 3;
            break;
        case '   |_|  |':
            val = 4;
            break;
        case ' _ |_  _|':
            val = 5;
            break;
        case ' _ |_ |_|':
            val = 6;
            break;
        case ' _   |  |':
            val = 7;
            break;
        case ' _ |_||_|':
            val = 8;
            break;
        case ' _ |_| _|':
            val = 9;
            break;
    }
    return val;
}
}
