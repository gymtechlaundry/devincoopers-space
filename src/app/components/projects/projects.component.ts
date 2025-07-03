import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatGridListModule, MatIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Not Todo',
      icon: 'assets/images/icons/not-todo.png',
      description: 'Reclaim your time and sanity by keeping track of things you should not be doing.',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.nottodo&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/NotTodo'
    },
    {
      name: 'Pet Assistant',
      icon: 'assets/images/icons/pet-assistant.png',
      description: 'Keep track of your pet\'s important details.',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'My Portfolio',
      icon: 'assets/images/icons/portfolio.png',
      description: 'Keep track of your pet\'s important details.',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'DARC Software',
      icon: 'assets/images/icons/darcsoftware.png',
      description: 'Keep track of your pet\'s important details.',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'My Github',
      icon: 'assets/images/icons/github.png',
      description: 'Keep track of your pet\'s important details.',
      downloadUrl: '',
      github: '',
      url: 'https://github.com/gymtechlaundry'
    },
    {
      name: 'My LinkedIn',
      icon: 'assets/images/icons/linkedin.png',
      description: 'Keep track of your pet\'s important details.',
      downloadUrl: '',
      github: '',
      url: 'https://www.linkedin.com/in/devinraycooper/'
    }
  ]

  constructor(private dialog: MatDialog) {
  }

  goToProject(app: any) {
    this.dialog.open(ProjectDetailModalComponent, {
      data: app,
      width: '100dvw',
      maxWidth: '100dvw',
      height: '100dvh',
      panelClass: 'full-screen-modal'
    })
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

