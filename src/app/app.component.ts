import { Component} from '@angular/core';

import { ChildComponent } from './child-component/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
   user = {
    name:"Aouidane",
    webSite: 'XperTuto.com'
  }


  updateUser(): void{
  // if we update only the property the ngOnChange doesn't work
  // this.user.name = 'amine';

  this.user = {...this.user, name: 'amine'};
  }
}
