import { Component, OnInit,Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-child',
  template: `<div> Here is the user name: {{ user.name }}</div>`,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit ,OnChanges  {
  @Input() user: any;


  ngOnInit() {
   console.log('[ngOnInit] userName :'+ this.user?.name);
  }

  ngOnChanges(){
    console.log('[ngOnChanges] username :'+ this.user?.name);
  }
}
