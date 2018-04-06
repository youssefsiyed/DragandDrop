import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Tasks } from '../models/Tasks';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class TasksService {
 // postsUrl: string = 'http://xhub.ddns.net:9000/schedulling/approvedTalks?confType=conf';
    postsUrl: string = ' http://localhost:3000/talks';
  constructor(private http: HttpClient) { }

  //////////////////////////// Get Tasks 
  getTasks() : Observable<Tasks[]> {
    return this.http.get<Tasks[]>(this.postsUrl);
  }
  /////////////////////////// Post Tasks
  saveTasks(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.postsUrl, task, httpOptions);
  }
}
