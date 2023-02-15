import { autoinject, bindable, bindingMode } from 'aurelia-framework';

import { IPerson } from 'app';
@autoinject
export class PersonDetails {

  @bindable person: IPerson;
  @bindable confirm;
  @bindable cancel;


  changeData() {
    this.confirm(this.person); 
  }

  cancelData(){
    this.cancel();
  }

}
