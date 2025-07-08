import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { HeroComponent
 } from '../hero/hero.component';
import { ProjectsComponent } from "../projects/projects.component";
import { TrackClickDirective } from '../../directive/track-click.directive';

@Component({
  selector: 'app-home',
  imports: [MatIcon, HeroComponent, ProjectsComponent, TrackClickDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChildren('sectionRef') sectionRefs!: QueryList<ElementRef>

  currentTitle: string = 'THE HERO YOU DIDN\'T THINK YOU NEEDED';

  scrollToSection(ref: ElementRef | undefined) {
    if (ref && ref.nativeElement) {
      ref.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
