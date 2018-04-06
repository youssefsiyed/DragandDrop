import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Solts } from '../models/Solts';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class SoltsService {

  soltsUrl: string = 'http://localhost:5000/slots';
  
  constructor(private http : HttpClient) { }

  //////////////////////////// Get Solts 
  getSolts() : Observable<Solts[]> {
    return this.http.get<Solts[]>(this.soltsUrl);
  }
  //////////////////////////////// Charts Solts
  chartsSolts() {
    return this.http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      .map(result => result);
  }
}
