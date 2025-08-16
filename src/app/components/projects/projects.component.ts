import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';
import { TrackClickDirective } from '../../directive/track-click.directive';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { CalculatorComponent } from '../calculator/calculator.component';

declare let gtag: Function;

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatGridListModule, TrackClickDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  projects: Project[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  goToProject(app: any) {
    if (app.url) {
      gtag('event', 'click', {
        event_category: 'outbound',
        event_label: app.name.toLowerCase()
      });
      window.open(app.url, '_blank')
    } else {
        gtag('event', 'click', {
          event_category: 'portfolio_projects',
          event_label: app.name.toLowerCase()
        });
        this.dialog.open(ProjectDetailModalComponent, {
          data: app,
          width: '100dvw',
          maxWidth: '100dvw',
          height: '100dvh',
          maxHeight: '100dvh',
        })
    }
  }

  goToCalculator() {
    gtag('event', 'click', {
      event_category: 'portfolio_projects',
      event_label: 'calculator'
    });
    this.dialog.open(CalculatorComponent, {
      width: '100dvw',
      maxWidth: '100dvw',
      height: '100dvh',
      maxHeight: '100dvh',
    })
  }
  

  openAction(open: string) {
    switch (open) {
      case 'phone': window.open('tel:+19044891072', '_self');
        break;
      case 'email': window.open('mailto:looking@devincoopers.space', '_self');
        break;
      case 'text': window.open('sms:+19044891072', '_self');
        break;
      case 'github': window.open('https://github.com/gymtechlaundry', '_blank');
        break;
      case 'linkedin': window.open('https://www.linkedin.com/in/devinraycooper/', '_blank');
        break;
      case 'X': window.open('https://x.com/devincooper', '_blank');
    }
  }
}

