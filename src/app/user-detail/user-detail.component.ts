import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterInterface, CharacterResponseInterface } from '../models/user.model';
import { UserDetailService } from './user-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userId: string = '';
  public character?: CharacterInterface;

  constructor(
    private userDetailService: UserDetailService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recoverUserId();
    
  }

  private getCharacterDetail(id: string): void {
    this.userDetailService.getCharactersDetail(id).subscribe((res: any) => {
      this.character = res;
      console.log(res.name)
    })
  }

  recoverUserId(): void {
    // http://localshots:4200/user-list/33
    this.route.params.subscribe((params) => {
      this.userId = params['userId']; //33
      this.getCharacterDetail(this.userId);
    });
  }

}
