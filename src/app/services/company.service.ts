import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs'
import {Company} from '../interfaces/company'
import { UpdateCompanyComponent } from '../components/update-company/update-company.component';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  private dbUrl

  // getAllCompanies(): Observable<Company []>{
  //   //TODO implement method

  // }

  // getSingleCompany(Id:number):Observable<Company>{
  //   //TODO implement method

  // }

  postCompany(comapany: Company){
    //TODO implement method

  }

  deleteCompany(int:number){
    //TODO implement method

  }

  // updateCompany(company:Company):Observable<Company>{
  //   //TODO implement method

  // }

}
