import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { AsyncEqualValidatorDirective } from './welcome/directives/async-equal-validator.directive';
import { LogInComponent } from './welcome/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    AsyncEqualValidatorDirective,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
