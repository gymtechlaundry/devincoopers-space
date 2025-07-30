import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  // Get all projects
  getProjects(): Observable<Project[]> {
    const headers = new HttpHeaders({
      'x-api-key': environment.apiKey
    });
    return this.http.get<Project[]>(`${this.baseUrl}/projects`, { headers });
  }
}
