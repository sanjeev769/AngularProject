import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child96',
  templateUrl: './child96.component.html',
  styleUrls: ['./child96.component.css']
})
export class Child96Component {
 name:string='Child 96 value';
 @Input() messageFromParent: string ='';
 getName():string {
    return this.name;
 }
}
