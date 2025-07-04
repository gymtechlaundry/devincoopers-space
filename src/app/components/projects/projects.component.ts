import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';
import projects from '../../../assets/data/projects.json';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatGridListModule],
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
      window.open(app.url, '_blank')
    } else {
      this.dialog.open(ProjectDetailModalComponent, {
        data: app,
        width: '100dvw',
        maxWidth: '100dvw',
        height: '100dvh',
        maxHeight: '100dvh',
      })
    }
  }

  callMe() {
    window.open('tel:+19044891072', '_self');
  }

  emailMe() {
    window.open('mailto:looking@devincoopers.space', '_self');
  }

  textMe() {
    window.open('sms:+19044891072', '_self');
  }
}

