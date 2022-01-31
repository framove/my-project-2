import { UserListService } from './user-list.service';
import { Component, OnInit } from '@angular/core';
import { CharacterInterface } from '../models/user.model';
import { CharacterResponseInterface } from './../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: CharacterInterface[] = [];
    filterPost = '';

  constructor( private userListService: UserListService) { }

  ngOnInit(): void {
    this.getCharacterList();
  }

  private getCharacterList(): void {
    this.userListService.getCharacters().subscribe((res: CharacterResponseInterface) => {
      this.userList = res.results;
    })
  }

}
