import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api:string = "http://localhost:8080/majime/v1/"

  constructor(private http:HttpClient) { }

  getSamples(){
    return this.http.get(this.api + "sample").toPromise()
  }

  addSample(sample){
    return this.http.post(this.api + "sample",sample).toPromise()
  }
}
