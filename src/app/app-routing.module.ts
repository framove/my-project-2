import { FormComponent } from './pages/form/form.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'user-list/:userId', component: UserDetailComponent },
  { path: `form`, loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule)},
 //{ path: 'form', component: FormComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 