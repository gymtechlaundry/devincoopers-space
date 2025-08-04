import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'
import { RouterLink } from '@angular/router';


export type MenuItem = {
  icon: string
  label: string;
  route?: string;
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [MatIconModule, MatListModule, CommonModule, RouterLink],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon: 'person',
      label: 'Portfolio',
      route: 'portfolio'
    },
    {
      icon: 'local_bar',
      label: 'BarSync',
      route: 'barsync'
    }
  ])

}
