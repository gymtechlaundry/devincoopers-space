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
  previousDisplay = '';
  firstValue: number | null = null;
  secondValue: string = '';
  action: string | null = null;
  
  enterNumber(num: string) {
    if (this.display === '0') {
      this.display = num;
    } else {
      this.display = `${this.display}${num}`;
      this.secondValue = `${this.secondValue}${num}`;
    }
    console.log(this.display);
    console.log('first value' + this.firstValue);
    console.log('second value' + this.secondValue);
    console.log('action ' + this.action);
  }
  
  clear() {
    this.display = '0';
    this.firstValue = null;
    this.secondValue = '';
    this.previousDisplay = '';
  }
  
  operand(action: string) {
    this.secondValue = '';
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = `${this.display}${action}`;
  }

  calculate() {
    this.previousDisplay = this.display;
    const a = this.firstValue;
    const b = parseFloat(this.secondValue);
    
    if (a !== null) {
      let result: number | null = null;
      if (this.action === 'x') {
        result = a * b;
      } else if (this.action === '÷') {
        result = a / b;
      } else if (this.action === '+') {
        result = a + b;
      } else if (this.action === '-') {
        result = a - b;
      }
      this.firstValue = result;
      this.display = result !== null ? result.toString() : 'Error';
    }
  }

}
