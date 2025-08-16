import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-portfolio-admin',
  imports: [MatListModule, CommonModule, MatToolbar],
  templateUrl: './portfolio-admin.component.html',
  styleUrl: './portfolio-admin.component.scss'
})
export class PortfolioAdminComponent implements OnInit {
  projects: Project[] = [];
  loading = true;

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.fetchProjects();
  }

  fetchProjects(): void {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      complete: () => (this.loading = false),
    });
  }

  deleteProject(_t11: any) {
  throw new Error('Method not implemented.');
  }
  openEdit(_t11: any) {
  throw new Error('Method not implemented.');
  }
  openCreate() {
  throw new Error('Method not implemented.');
  }

}
