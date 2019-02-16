import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-seven-segment-to-number',
  templateUrl: './seven-segment-to-number.component.html',
  styleUrls: ['./seven-segment-to-number.component.css']
})
export class SevenSegmentToNumberComponent {
  fileText;
  outputFile = '';

  handleFileInput(file): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.fileText = reader.result;
      this.convertSevenSegmentIntoNumber();
    };
    reader.readAsText(file[0], 'UTF-8');
  }

  convertSevenSegmentIntoNumber(): void {
    const lines = this.fileText.split('\n');
    for (let index = 0; index < lines.length - 1; index = index + 4) {
      this.outputFile = this.outputFile + this.getNumber(lines.slice(index, index + 3)) + '\n';
    }
    const myblob = new Blob([this.outputFile], {
      type: 'text/plain'
    });
    FileSaver.saveAs(myblob, 'ParsedNumbers.txt');
  }

  getNumber(lines): any {
    lines = lines.map(line => line.match(/.../g));
    let output = '';
    output = output + lines[0].map((char, index) => this.getDigit(char + lines[1][index] + lines[2][index])).join('');
    return output;
  }

  getDigit(pattern): any {
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
      default :
         val = '?';
         break;
    }
    return val;
  }
}
