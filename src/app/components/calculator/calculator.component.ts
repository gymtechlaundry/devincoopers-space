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
  display: string = '0';

}
