import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualificadoresService {

  private baseUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) { }


  getQualificadores(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sintomas`);
  }
}
