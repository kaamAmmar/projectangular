import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { headerComponent } from './core/header/header.component';
import { sidenavComponent } from './core/sidenav/sidenav.component';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,  
    headerComponent,
    sidenavComponent,
    LoginComponent ,
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ClarityModule , RouterModule ,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

