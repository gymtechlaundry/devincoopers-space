import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'project-detail-modal',
  imports: [CommonModule, MatDialogModule, MatIcon, MatCardModule],
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.scss'
})
export class ProjectDetailModalComponent {
  buttonLabel: string = 'Install';

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.website) this.buttonLabel = 'Go to site'
  }

  goToUrl(url:string) {
    window.open(url, '_blank');
  }

  goToApp(data: any) {
    if (data.website) {
      window.open(data.website, '_blank');
    }

    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('android')) {
      window.open(data.androidLink, '_blank')
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad') || userAgent.includes('ipod')) {
      window.open(data.iosLink, '_blank');
    } else {
      window.open(data.webLink, '_blank');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
