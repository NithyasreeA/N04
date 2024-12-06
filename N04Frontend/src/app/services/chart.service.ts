import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = `${environment.apiUrl}/charts`;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private getHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  //asynchronous HTTP GET with JSON response
  getGenerativeAIAdoption(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ai-adoption`, this.getHeaders());
  }

  getGenerativeAIEfficiency(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ai-efficiency`, this.getHeaders())
  }  
}