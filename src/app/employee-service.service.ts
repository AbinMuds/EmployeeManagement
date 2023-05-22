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

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  storeData(data: any): Observable<any> {
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  deleteAll(): Observable<any> {
    return this.http.delete<any>(baseUrl);
  }
}
