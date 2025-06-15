import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.css']
})
export class TemplateExampleComponent {
  inputemail: string='';
  login(input:any)
  {    
    this.inputemail=input.email;
  }
}
