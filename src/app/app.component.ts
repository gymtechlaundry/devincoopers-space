import { Component } from '@angular/core';
import { NavigationEnd, Route, Router, RouterOutlet } from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected title = 'devincoopers-space';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      gtag('config', 'G-FH8LQY4GFP', {
        debug_mode: true,
        page_path: window.location.pathname + window.location.search
      });
    }
  });
  }
}
