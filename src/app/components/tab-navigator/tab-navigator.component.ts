import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-tab-navigator',
  imports: [RouterModule, CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './tab-navigator.component.html',
  styleUrl: './tab-navigator.component.scss'
})
export class TabNavigatorComponent {
  tabs = [
    { label: 'Home', route: '/home' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Education', route: '/education' },
    { label: 'About', route: '/about' },
  ];

  currentIndex = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      const index = this.tabs.findIndex(tab => currentRoute.includes(tab.route));
      this.currentIndex = index !== -1 ? index : 0;
    });
  }

  getLeftImage(): string | null {
    switch (this.currentIndex) {
      case 1: return 'assets/images/about.png';
      case 2: return 'assets/images/projects.png';
      case 3: return 'assets/images/experience.png';
      case 4: return 'assets/images/education.png';
      default: return null;
    }
  }

  getRightImage(): string | null {
    switch (this.currentIndex) {
      case 0: return 'assets/images/projects.png';
      case 1: return 'assets/images/experience.png';
      case 2: return 'assets/images/education.png';
      case 3: return 'assets/images/about.png';
      default: return null;
    }
  }

  shouldPulse(): boolean {
    return this.currentIndex === 0;
  }

  // get nextTab() {
  //   return this.currentIndex > this.tabs.length - 1 ? this.tabs[this.currentIndex + 1] : null;
  // }

  goTo(index: number) {
    if (index >= 0 && index < this.tabs.length) {
      this.router.navigateByUrl(this.tabs[index].route);
    }
  }

  get canGoBack() {
    return this.currentIndex > 0;
  }

  get canGoForward() {
    return this.currentIndex < this.tabs.length -1;
  }
}
