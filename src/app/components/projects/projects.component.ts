import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModalComponent } from '../project-detail-modal/project-detail-modal.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatCardModule, MatGridListModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Not Todo',
      icon: 'assets/images/icons/not-todo.png',
      description: 'The Not To-Do App is a mobile-first productivity tool designed to help users break bad habits by focusing on what they should avoid doing. Instead of tracking tasks to complete, it encourages mindful behavior by letting users create and categorize habits they want to eliminate. The app sends smart daily reminders, tracks streaks, and provides visual feedback on progress. Built with Ionic, Angular, and SQLite, the Not To-Do App combines clean design with intentional functionality to help users stay focused, disciplined, and in control of their time and attention.',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/NotTodo'
    },
    {
      name: 'Pet Assistant',
      icon: 'assets/images/icons/pet-assistant.png',
      description: 'Under Construction',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'My Portfolio',
      icon: 'assets/images/icons/portfolio.png',
      description: 'Under Construction',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'DARC Software',
      icon: 'assets/images/icons/darcsoftware.png',
      description: 'Under Construction',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.darcsoftware.petassistant&pcampaignid=web_share',
      github: 'https://github.com/gymtechlaundry/pet-assistant'
    },
    {
      name: 'My Github',
      icon: 'assets/images/icons/github.png',
      description: 'Link',
      downloadUrl: '',
      github: '',
      url: 'https://github.com/gymtechlaundry'
    },
    {
      name: 'My LinkedIn',
      icon: 'assets/images/icons/linkedin.png',
      description: 'Link',
      downloadUrl: '',
      github: '',
      url: 'https://www.linkedin.com/in/devinraycooper/'
    }
  ]

  constructor(private dialog: MatDialog) {
  }

  goToProject(app: any) {
    if (!app.downloadUrl) {
      window.open(app.url, '_blank')
    } else {
      this.dialog.open(ProjectDetailModalComponent, {
        data: app,
        width: '100dvw',
        maxWidth: '100dvw',
        height: '100dvh',
        panelClass: 'full-screen-modal'
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

