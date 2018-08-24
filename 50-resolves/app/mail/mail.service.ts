// needed for service setup
import { Injectable } from '@angular/core';
// for http calls get post put patch delete 
import { Http } from '@angular/http';
// async handling of data requests  / type checking
import { Observable } from 'rxjs/Observable';
// structure data 
import 'rxjs/add/operator/map';
// decribes your data 
import { Mail } from './models/mail.interface';

// build out your data 
@Injectable()
export class MailService {
  // make http avavible in our methods
  constructor(private http: Http) {}
  getFolder(folder: string): Observable<Mail[]> {
    return this.http
      .get(`/api/messages?folder=${folder}`)
      .map(response => response.json());
  }
}