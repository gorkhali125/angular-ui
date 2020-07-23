import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [AppComponent, WelcomeComponent, RegisterComponent, LoginComponent],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
