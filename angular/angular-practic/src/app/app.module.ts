import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CitiesComponent } from './components/cities/cities.component';
import { CityComponent } from './components/city/city.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CitiesComponent,
    CityComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
