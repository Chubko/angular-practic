import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserTransformPipe} from '../app/pipes';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import {BackgroundDirective} from './directives';
import {ColorDirective} from './directives';

@NgModule({
  declarations: [
    AppComponent,
    UserTransformPipe,
    UsersComponent,
    BackgroundDirective,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
