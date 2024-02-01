import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect/connect.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { DbserviceService } from './dbservice.service';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [AppComponent, ConnectComponent, QueryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [DbserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
