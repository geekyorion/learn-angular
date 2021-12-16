import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { HtmlInTsComponent } from './basics/html-in-ts/html-in-ts.component';  // add the component here in the app module

import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './project/components/header/header.component';
import { ReceipesComponent } from './project/components/receipes/receipes.component';
import { ReceipeListComponent } from './project/components/receipes/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './project/components/receipes/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './project/components/receipes/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/components/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    HtmlInTsComponent, // need to declare the component in this block
    ProjectComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
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
