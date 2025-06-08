import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { StartPageComponent } from './start-page/start-page.component';
import { Child1Component } from './child1/child1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TogglePanelHeaderDirective } from './toggle-panel-header.directive';
import { TogglePanelFooterDirective } from './toggle-panel-footer.directive';
import { CommonPageComponent } from './common-page/common-page.component';
import { MainStartPageComponent } from './main-start-page/main-start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StartPageComponent,
    Child1Component,
    TogglePanelHeaderDirective,
    TogglePanelFooterDirective,
    CommonPageComponent,
    MainStartPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainStartPageComponent]
})
export class AppModule { }
