import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginPage=new FormGroup({
    ÜserName: new FormControl(null,Validators.required),
    Password: new FormControl(null,Validators.required),

  });
  OnSubmitLogin():void
  {
    if( this.loginPage.valid)
    {

    }

  }
  ValidateName()
  {
    return this.loginPage.get('ÜserName');
  }
  ValidatePassword()
  {
    return this.loginPage.get('Password')
  }

}
