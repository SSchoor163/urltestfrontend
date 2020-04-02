import { Component, OnInit } from '@angular/core';
import {GTMetricsService} from './services/gtmetrics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'url-test';

  test;
  constructor(private gtService:GTMetricsService){
    
  }

  ngOnInit(){
    this.gtService.postTest("nothing")
    
  }
}
