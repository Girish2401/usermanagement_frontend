import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  // private api_url: string = "http://localhost:3002"
  private api_url: string = "https://usermanagement-backend-ocsh.onrender.com"

  constructor(private http: HttpClient) { }

  public getAllEmployees(): Observable<any> {
    return this.http.get(`${this.api_url}/employee`)
  }

  public getEmployee(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/employee/${id}`)
  }


  public updateEmployee(employeeId: string, employeeDetails: any): Observable<any> {
    return this.http.put<any>(`${this.api_url}/employee/${employeeId}`, employeeDetails);
  }
  public deleteEmployee(employeeId: any): Observable<string> {
    return this.http.delete<string>(`${this.api_url}/employee/${employeeId}`);
  }

  public createEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.api_url}/employee`, employee);
  }
}
