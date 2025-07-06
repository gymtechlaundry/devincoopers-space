import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { HeroComponent
 } from '../hero/hero.component';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-home',
  imports: [MatIcon, HeroComponent, ProjectsComponent],
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
