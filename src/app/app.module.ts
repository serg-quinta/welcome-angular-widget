import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './welcome/sign-up/sign-up.component';
import { LogInComponent } from './welcome/log-in/log-in.component';
import { AsyncEqualValidatorDirective } from './welcome/directives/async-equal-validator.directive';
import { HighlightDirective } from './welcome/directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    AsyncEqualValidatorDirective,
    LogInComponent,
    HighlightDirective
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
