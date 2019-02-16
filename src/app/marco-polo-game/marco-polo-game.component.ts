import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marco-polo-game',
  templateUrl: './marco-polo-game.component.html',
  styleUrls: ['./marco-polo-game.component.css']
})
export class MarcoPoloGameComponent implements OnInit {
  // declaring array from 1 to 100
  array = Array.from({ length: 100 }, (v, i) => i + 1);
  outputArray = [];
  ngOnInit() {
    this.generate(this.array);
  }
  generate(array): void {
   array.map(
     num => {
        this.outputArray.push(this.checkNumber(num));
     }
   );
   this.outputArray.toString();
  }
  checkNumber(num): any {
    if (num % 4 === 0 && num % 7 === 0) {
      return 'marcopolo';
    } else if (num % 4 === 0) {
      return 'marco';
    } else if (num % 7 === 0) {
      return 'polo';
    }
    return num;
  }
}
