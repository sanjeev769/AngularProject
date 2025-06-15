import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-translation-example',
  templateUrl: './translation-example.component.html',
  styleUrls: ['./translation-example.component.css']
})
export class TranslationExampleComponent {
  constructor(private translateService: TranslateService){
    translateService.setDefaultLang('en');
  }
  switchLanguage(lang:Event)
  {
    const selectedLanguage = (lang.target as HTMLSelectElement).value;    
    this.translateService.use(selectedLanguage);

  }

}
