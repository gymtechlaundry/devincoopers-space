import { Component } from '@angular/core';
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
  currentTitle: string = 'THE HERO YOU DIDN\'T THINK YOU NEEDED';
}
