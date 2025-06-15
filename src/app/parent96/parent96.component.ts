import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { Child96Component } from '../child96/child96.component';
import { MessageBundle } from '@angular/compiler';

@Component({
  selector: 'app-parent96',
  templateUrl: './parent96.component.html',
  styleUrls: ['./parent96.component.css']
})
export class Parent96Component implements AfterViewInit {
  @ViewChild(Child96Component) child96ComponentRef !: Child96Component;
  
  ngAfterViewInit(): void {
    
    console.log(this.child96ComponentRef.getName());
    
  }
  CheckTemplateRefName(msg:string)
  {
    console.log(msg)

  }
  test(msg:any)
  {
    alert(msg);
  }

}
