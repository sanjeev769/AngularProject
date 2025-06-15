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
import { Child96Component } from './child96/child96.component';
import { Parent96Component } from './parent96/parent96.component';
import { Child92Component } from './child92/child92.component';
import { ValidationExampleComponent } from './validation-example/validation-example.component';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { CountryStateExampleComponent } from './country-state-example/country-state-example.component';
import { AngularGridExampleComponent } from './angular-grid-example/angular-grid-example.component';
import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './login/login.component';
import { InterfaceExampleComponent } from './interface-example/interface-example.component';
import { FinalInterfaceImplementedPageComponent } from './final-interface-implemented-page/final-interface-implemented-page.component';
import { TranslationExampleComponent } from './translation-example/translation-example.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StartPageComponent,
    Child1Component,
    TogglePanelHeaderDirective,
    TogglePanelFooterDirective,
    CommonPageComponent,
    MainStartPageComponent,
    Child96Component,
    Parent96Component,
    Child92Component,
    ValidationExampleComponent,
    TemplateExampleComponent,
    CountryStateExampleComponent,
    AngularGridExampleComponent,
    LoginComponent,
    InterfaceExampleComponent,
    FinalInterfaceImplementedPageComponent,
    TranslationExampleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [TranslationExampleComponent]
})
export class AppModule { }
