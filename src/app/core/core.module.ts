import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AuthModule } from '../auth/auth.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    AuthRoutingModule
  ],
  exports: [
    NotFoundComponent,
    MainComponent,
    HttpClientModule,
    SidenavComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }