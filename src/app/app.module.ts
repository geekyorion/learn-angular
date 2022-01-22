import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './basics/basics.component';
import { HtmlInTsComponent } from './basics/html-in-ts/html-in-ts.component';  // add the component here in the app module

// Project components
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './project/components/header/header.component';
import { RecipesComponent } from './project/components/recipes/recipes.component';
import { RecipeListComponent } from './project/components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project/components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project/components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project/components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project/components/shopping-list/shopping-edit/shopping-edit.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { CockpitComponent } from './data-binding/cockpit/cockpit.component';
import { ServerElementComponent } from './data-binding/server-element/server-element.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { DropdownDirective } from './project/shared/dropdown.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';

import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    BasicsComponent,
    HtmlInTsComponent, // need to declare the component in this block

    // Project components
    ProjectComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

    DataBindingComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // we can provide a service in the AppModule to access it's instance in any component
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
