import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Deadline } from '../models/deadline.models';

@Injectable({
  providedIn: 'root'
})
export class DeadlinesService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  
  public getDeadlines(): Observable<Deadline> {
    return this.http.get<Deadline>(`${this.baseUrl}/deadlines`);
  }
}
