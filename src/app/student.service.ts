import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/students';
  constructor(private http: HttpClient) { }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateStudent(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
