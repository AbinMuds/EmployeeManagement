import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './model/employee.model';

const baseUrl = 'http://localhost:8000/api/v1/employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {}

  getAllByName(name: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}/showByName/${name}`);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  storeData(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${baseUrl}/${id}`);
  }
}
