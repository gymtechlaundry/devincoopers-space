import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  private baseUrl = `${environment.apiUrl}/projects`; 

  constructor(private http: HttpClient) {}

  // Get all projects
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl, {
      headers: this.getHeaders() 
    });
  }

  // Get single project by ID
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }

  // Create new project
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, project, {
      headers: this.getHeaders()
    });
  }
  
  // Update existing project
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.baseUrl}/${project.id}`, project, {
      headers: this.getHeaders()
    });
  }

  // Delete a project
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
  
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-api-key': environment.apiKey,
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
  }
}
