import { Component, OnInit } from '@angular/core';
import { InterfaceExampleComponent } from '../interface-example/interface-example.component';

@Component({
  selector: 'app-final-interface-implemented-page',
  templateUrl: './final-interface-implemented-page.component.html',
  styleUrls: ['./final-interface-implemented-page.component.css']
})
export class FinalInterfaceImplementedPageComponent  {

  ngOnInit()
  {
    let sum=new InterfaceExampleComponent();
    let y=sum.TotalMarks(23,45);
    console.log(y.toString());

  }


}


