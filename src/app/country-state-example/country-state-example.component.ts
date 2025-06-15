import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-country-state-example',
  templateUrl: './country-state-example.component.html',
  styleUrls: ['./country-state-example.component.css']
})
export class CountryStateExampleComponent implements OnInit {
  
  stateList:any =[];
  countryList= [
  { code: 'US', name: 'United States' },
  { code: 'IN', name: 'India' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' }
];
stateCompleteList=[{code:'MAH', name:'Maharastra',countrycode:'IN'},
    {code:'UP', name:'UttarPradesh',countrycode:'IN'},
    {code:'BHP', name:'Bhopal',countrycode:'IN'},
    {code:'US1', name:'California',countrycode:'US'},
    {code:'US2', name:'New Jersy',countrycode:'US'},
    {code:'US3', name:'Texas',countrycode:'US'}
]
  
  public CountryStateForm =new FormGroup({
    country : new FormControl('',Validators.required),
    states: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    
  }
  

  PopulateState(event: Event){    
    const selectedCountryId = (event.target as HTMLSelectElement).value;    
    this.stateList=this.stateCompleteList.filter(x=>x.countrycode==selectedCountryId);
    console.log(this.CountryStateForm.value.name);
    console.log(this.stateList);
    

  
  }

}
