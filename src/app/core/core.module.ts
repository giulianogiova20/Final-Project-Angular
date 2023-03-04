import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AuthModule } from '../auth/auth.module';
import { AuthRoutingModule } from '../auth/auth-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    MainComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
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