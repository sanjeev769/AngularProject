import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child92',
  templateUrl: './child92.component.html',
  styleUrls: ['./child92.component.css']
})
export class Child92Component {
  @Output() emitToParent=new EventEmitter();
  CallParent()
  {
    this.emitToParent.emit();
  }

}
