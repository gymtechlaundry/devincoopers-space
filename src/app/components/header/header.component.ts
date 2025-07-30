import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [MatIcon, MatToolbar, MatMenuModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('overlayMenu', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  menuOpen = false;
  lastScrollTop = 0;
  toolbarHidden = false;
  
  private scrollHandler = this.onScroll.bind(this);
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    document.body.addEventListener('scroll', this.scrollHandler, { passive: true });
  }
  
  ngOnDestroy(): void {
    document.body.removeEventListener('scroll', this.scrollHandler);
  }
  
  onScroll(): void {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    
    this.toolbarHidden = scrollTop > this.lastScrollTop && scrollTop > 64;
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    
    // Optional debug:
    console.log('Header scroll, hidden =', this.toolbarHidden);
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigate(path: string) {
    this.menuOpen = false;
    this.router.navigate([path]);
  }
}
