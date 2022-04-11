import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from './grades/grades.component';

@Injectable({
  providedIn: 'root'
})
export class GradeServiceService {

  constructor(private http:HttpClient) {
  }
  private readonly baseUrl:string = "http://localhost:3000/api/";

  public getGrades():Observable<Grade[]>{
    return this.http.get<Grade[]>(this.baseUrl + "grades");
  }
  public getGrade(gradeId:string):Observable<Grade>{
    return this.http.get<Grade>(this.baseUrl + `grades/${gradeId}`);
  }
  public deleteGrade(gradeId:string):Observable<any>{
    return this.http.delete<any>(this.baseUrl + `grades/${gradeId}`);
  }
}
