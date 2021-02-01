import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../interfaces/user';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Output()
  bubbleUp = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getId(id: number): void {
    this.bubbleUp.emit(id);
  }
}
