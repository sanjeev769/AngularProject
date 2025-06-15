import { Component } from '@angular/core';
import { Student } from '../model/student';


@Component({
  selector: 'app-interface-example',
  templateUrl: './interface-example.component.html',
  styleUrls: ['./interface-example.component.css']
})
export class InterfaceExampleComponent implements Student {

  TotalMarks(FirstSubject:number, SecondSubject: number)
  {
      return (FirstSubject+SecondSubject);
  }

}
