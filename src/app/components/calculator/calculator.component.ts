import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-calculator',
  imports: [MatGridList, MatGridTile],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  display = '0';
  firstValue: number | null = null;
  action: string | null = null;
  
  enterNumber(num: string) {
    if (this.display === '0') {
      this.display = num;
    } else {
      this.display = `${this.display}${num}`;
    }
  }
  
  clear() {
    this.display = '0';
  }
  
  operand(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);
    
    if (a !== null) {
      let result: number | null = null;
      if (this.action === 'm') {
        result = a * b;
      } else if (this.action === 'd') {
        result = a / b;
      } else if (this.action === 'a') {
        result = a + b;
      } else if (this.action === 's') {
        result = a - b;
      }
      this.firstValue = result;
      this.display = result !== null ? result.toString() : 'Error';
    }
  }

}
