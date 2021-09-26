import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private baseUrl: string = 'http://localhost:8181/';

  constructor(private http: HttpClient) {}

  sendEmail(data: any) {
    return this.http.post(`${this.baseUrl}/mail`, data);
  }
}
