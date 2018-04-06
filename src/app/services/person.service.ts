import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Person } from '../models/Person';


@Injectable()
export class PersonService {
 
  url:string ="http://localhost:8080/api/persons"; 
  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
 
  constructor(private http : HttpClient) { }

  /////////////////////////////////// Create Person
  createPerson(persons){
   return this.http.post(this.url,this.httpOptions);
  }
}
