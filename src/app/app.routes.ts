import { Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserShowComponent } from './users/user-show/user-show.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

export const appRoutes: Routes = [
  { path: 'user/:userId', component: UserShowComponent },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/users'
  }];