import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, MatGridListModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>

  ngAfterViewInit() {
    const vid = this.heroVideo?.nativeElement;
    if (vid) {
      vid.muted = true;
      vid.play().catch(error => {
        console.warn('Autoplay blocked:', error);
      });
    }
  }
}
