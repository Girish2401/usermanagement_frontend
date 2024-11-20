import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  // private api_url: string = "http://localhost:3000"
  private api_url: string = "https://usermanagement-backend-ocsh.onrender.com"

  constructor(private http: HttpClient) { }

  public getAllVisitors(dateValue = null): Observable<any> {
    let params
    if (dateValue) {
      params = new HttpParams();
      params = params.set('date', dateValue)
    }
    return this.http.get(`${this.api_url}/visitors`, { params });
  }

  public getVisitor(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/visitor/${id}`)
  }


  public updateVisitor(visitorId: string, visitorDetails: any): Observable<any> {
    return this.http.put<any>(`${this.api_url}/visitor/${visitorId}`, visitorDetails);
  }

  // public deleteUser(user: IUser): Observable<string> {
  //   return this.http.delete<string>(`${this.api_url}/user/${user._id}`);
  // }

  public createVisitor(visitor: any): Observable<any> {
    return this.http.post<any>(`${this.api_url}/visitor/add`, visitor);
  }
}
