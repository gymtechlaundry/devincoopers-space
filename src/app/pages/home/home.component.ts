import { Component, ElementRef, HostListener, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { HeroComponent
 } from '../../components/hero/hero.component';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { TrackClickDirective } from '../../directive/track-click.directive';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [MatIcon, HeaderComponent, HeroComponent, ProjectsComponent, TrackClickDirective],
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
