import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-validation-example',
  templateUrl: './validation-example.component.html',
  styleUrls: ['./validation-example.component.css']
})
export class ValidationExampleComponent  {
  
  public loginForms = new FormGroup ({
    txtName : new FormControl(null, Validators.required),
    txtEmail: new FormControl(null, Validators.required)
  })
  // txtName:string='';
  // txtEmail:string='';

  SubmitLogin()
  {
    if(this.loginForms.valid)
    {
      console.log(this.loginForms.value.txtName);
      console.log(this.loginForms.value.txtEmail);
    }
    

  }
  ValidateName() {
    return this.loginForms.get('txtName');

  }
  ValidateEmail() {
    return this.loginForms.get('txtEmail');

  }

}
