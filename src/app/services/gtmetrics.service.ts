import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {GtMetric} from '../interfaces/gt-metric';
import{FormBuilder, FormGroup} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class GTMetricsService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }
  GtMetricsUrl: string = "https://gtmetrix.com/api/0.1/";
testurl: string = "kubotausa.com";
Credits: number;
private dbUrl: string = "";

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Authorization': 'Basic c3NjaG9vckBzbW9vdGhmdXNpb24uY29tOjA1YzYyNmE4OTEyMWQwZGM2MzY1Y2E4OTAwMDE0N2Zk'
   
  })
};


postTest(urlString:string){
//TODO change url to actual url
urlString = this.testurl;
let form:FormGroup = this.fb.group({
  url: ['']
});
form.patchValue({
  url:urlString
})
let formData = new FormData();
formData.append("url", form.get('url').value);
console.log(formData);
return this.http.post<any>(this.GtMetricsUrl, formData, this.httpOptions);

}

// getTest(): Observable<GtMetric>{
// //TODO implement method

// }

// getCurrentCredits(): number{
// //TODO implement method

// }

postResults(){
//TODO implement method

}

}
