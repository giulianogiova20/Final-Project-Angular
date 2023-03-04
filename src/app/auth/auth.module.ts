import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material.module';


@NgModule({
  declarations: [
    AuthHomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
