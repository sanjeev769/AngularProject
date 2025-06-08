import { Component, AfterContentInit, ContentChild } from '@angular/core';
import { TogglePanelFooterDirective } from '../toggle-panel-footer.directive';
import { TogglePanelHeaderDirective } from '../toggle-panel-header.directive';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent implements AfterContentInit {
  hasFooter=false;
  isOpen=true;
  @ContentChild(TogglePanelFooterDirective) FooterDirective ?: TogglePanelFooterDirective;  
  ngAfterContentInit(): void {
    this.hasFooter = !! this.FooterDirective;
  }
  toggle()
  {
    this.isOpen=!this.isOpen;

  }

}
