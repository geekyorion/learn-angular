import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { HtmlInTsComponent } from './basics/html-in-ts/html-in-ts.component';  // add the component here in the app module

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    HtmlInTsComponent // need to declare the component in this block
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
