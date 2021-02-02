import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user: string;

  getUser(user: string): void {
    this.user = user;
    console.log(this.user);
  }
}

