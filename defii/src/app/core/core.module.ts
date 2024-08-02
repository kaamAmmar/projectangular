import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { headerComponent } from './header/header.component';
import { sidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
       headerComponent,
        sidenavComponent,
       LoginComponent,
       DashboardComponent
  ],
  imports: [
    CommonModule ,
  ],
  exports: [
    headerComponent,
    sidenavComponent,
       LoginComponent,
       DashboardComponent,
  ]
})
export class CoreModule { }
