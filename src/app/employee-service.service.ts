import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private api_url: string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  public getAllEmployees(): Observable<any> {
    return this.http.get(`${this.api_url}/employees`)
  }

  public getEmployee(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/employee/${id}`)
  }


  public updateEmployee(employeeId: string, employeeDetails: any): Observable<any> {
    return this.http.put<any>(`${this.api_url}/employee/${employeeId}`, employeeDetails);
  }
  // public deleteUser(user: IUser): Observable<string> {
  //   return this.http.delete<string>(`${this.api_url}/user/${user._id}`);
  // }

  public createEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.api_url}/employee`, employee);
  }
}
