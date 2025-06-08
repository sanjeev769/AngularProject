import { AfterViewInit, Component,ElementRef,OnInit,ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Child1Component } from '../child1/child1.component';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit,AfterViewInit {
  @ViewChild('txtName') name!:ElementRef | undefined ;
  @ViewChild(Child1Component) childComponent !: Child1Component;
  @ViewChildren('paragraph') paragraphRef! : QueryList<ElementRef>;
  FindNameValue:string='';
  childName:string='';
  ngOnInit(): void {
    this.FindNameValue=this.name?.nativeElement.value;
  }
  ChangeParagraphStyle()
  {
    this.paragraphRef.forEach((p,i) => {
      p.nativeElement.style.color='red';
      p.nativeElement.textContent=`${i+1}`;
    });
  }
  ngAfterViewInit(): void {
    this.FindNameValue=this.name?.nativeElement.value;
    this.childName=this.childComponent.getName();
  }
  getinputValue()
  {
    console.log(this.name?.nativeElement.value);       
    
  }
  getNameLater():void{
    this.childName=this.childComponent.getName();
  }
  

}
