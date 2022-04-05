import { User } from './../../../../../upgrade-arch-master/src/app/pages/user-list/models/user.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CharacterInterface } from '../../models/user.model';
import { CharacterResponseInterface } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 
 /* public isNewUserActive: boolean = false; */
 public user: User;
 @Output() sendUser = new EventEmitter<User>();

  constructor() { }
 
  ngOnInit(): void {
    this.user = {
      name: '',
      age: 0
    }
  }

  public saveUsername(value: string): void {
    if(this.user) {
    this.user.name = value;
    }
  }

  public createUser():void {
    console.log('this.user')

  }

}
