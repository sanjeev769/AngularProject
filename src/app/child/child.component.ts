import { Component, ContentChild, AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('refSportsTitle') refSports !: ElementRef | undefined
  ngAfterContentInit(): void {
    console.log(this.refSports?.nativeElement.innerText)
  }

}
