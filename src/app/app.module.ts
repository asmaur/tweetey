import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './modules/modules.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { PrimeModule } from './prime/prime.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TweetComponent } from './modules/components/tweet/tweet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //TweetComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ModulesModule,
    PrimeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
