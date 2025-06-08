import { Component, ContentChild, AfterContentInit, ElementRef, QueryList, ContentChildren} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('refSportsTitle') refSports !: ElementRef | undefined
  @ContentChildren('refSports') refNewSportsIntroduced !:QueryList<ElementRef>;
  
  ngAfterContentInit(): void {
    console.log(this.refSports?.nativeElement.innerText)
    this.refNewSportsIntroduced.forEach((p,i)=>{
        console.log(p.nativeElement.innerText);
    });
  }

}
