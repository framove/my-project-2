import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListService } from './user-list/user-list.service';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {  FontAwesomeModule  }  from  '@fortawesome/angular-fontawesome';
import { AddUserComponent } from './user-list/add-user/add-user.component' ;


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    NotFoundComponent,
    HeaderComponent,
    FilterPipe,
    AddUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
