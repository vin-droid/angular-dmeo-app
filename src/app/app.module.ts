import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserService } from './users/user.service';
import { GithubService } from './github.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserSearchComponent } from './users/user-search/user-search.component';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { Ellipsis } from './ellipsis';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNewComponent } from './users/user-new/user-new.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { UserComponent } from './users/user/user.component';
import { AddressComponent } from './shared/address/address.component';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserShowComponent,
    UserEditComponent,
    UserSearchComponent,
    Ellipsis,
    DashboardComponent,
    UserNewComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule, HttpModule,FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UserService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
