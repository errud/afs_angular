import { Component, OnInit } from '@angular/core';
import { NbDialogModule, NbDialogService } from '@nebular/theme';
import { ConnectedUser } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  connectedUser : ConnectedUser;

  constructor(
    private _userService : UserService,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this._userService.getProfile(this._authService.connectedUser.id).subscribe(
      (u : ConnectedUser) => this.connectedUser = u)
  }

}
