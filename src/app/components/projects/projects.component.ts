import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';
import projects from '../../../assets/data/projects.json';
import { TrackClickDirective } from '../../directive/track-click.directive';

declare let gtag: Function;

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatGridListModule, TrackClickDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = [];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.projects = projects;
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

