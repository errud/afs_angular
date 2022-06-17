import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister} from 'src/app/models/user.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  userRegisterFG : FormGroup  
  

  constructor(
    private _service : UserService,
    private _builder : FormBuilder

  ) { }

  ngOnInit(): void {
    this.userRegisterFG = this._builder.group({
      email : ['', [Validators.email, Validators.required]],
      password : ['', Validators.required],
      lastName : ['', Validators.required],
      firstName : ['', Validators.required],
      nickName : [''],
      favoritept : ['']
    })
  }
  
  onSubmit(){
      let values = this.userRegisterFG.value
      let userRegister: UserRegister = this.userRegisterFG.value
      userRegister.email = values['email']
      userRegister.password = values['password']     
      userRegister.firstName = values['firstName']
      userRegister.lastName = values['lastName']
      userRegister.nickName = values['nickName']
      userRegister.favoritept = values['favoritept']
  
      this._service.register(userRegister)
    }
}

  

