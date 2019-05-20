import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateValuesService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get('http://localhost:3034/load');
  }
}
