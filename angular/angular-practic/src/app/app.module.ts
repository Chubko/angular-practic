import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UsersResolveService} from './services/resolve/users-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';

const routes: Routes = [
  {path: 'auth/login', component: LoginFormComponent},
  {path: 'auth/register', component: RegisterFormComponent},
  {path: 'main/users', component: UsersComponent, resolve: {usersData: UsersResolveService}},
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
