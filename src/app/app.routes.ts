import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserNewComponent } from './users/user-new/user-new.component'

export const appRoutes: Routes = [
  { 
    path: 'users/:userId',
    component: UserShowComponent 
  },  
  { 
    path: 'users/edit/:userId',
    component: UserEditComponent 
  },  
  { 
    path: 'user/new',
    component: UserNewComponent 
  },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  {
    path: '',
    component: DashboardComponent
  },
  { path: '**',
    redirectTo: ''
  }
  ];