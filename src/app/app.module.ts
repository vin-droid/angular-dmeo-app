import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './users/user.service';
import { GithubService } from './github.service';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserSearchComponent } from './users/user-search/user-search.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShowComponent,
    UserEditComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [UserService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
