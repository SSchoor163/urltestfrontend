import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';
import { NewCompanyComponent } from './components/new-company/new-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import { GTMetricsService } from './services/gtmetrics.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailComponent,
    NewCompanyComponent,
    UpdateCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GTMetricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
