import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './admin/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderGraphComponent } from './order-graph/order-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderFormComponent,
    OrderGraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
