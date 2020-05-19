import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//

// Modules


// Components
import { Error404Component } from './errorpages/error404.component';
import { Error500Component } from './errorpages/error500.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumdsComponent } from './layout/breadcrumds/breadcrumds.component';
import { ControlSidebarComponent } from './layout/control-sidebar/control-sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    Error404Component,
    Error500Component,
    NavbarComponent,
    SidebarComponent,
    BreadcrumdsComponent,
    ControlSidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    Error404Component,
    Error500Component,
    NavbarComponent,
    SidebarComponent,
    BreadcrumdsComponent,
    ControlSidebarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
