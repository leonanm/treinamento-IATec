import { bindable, bindingMode, observable } from 'aurelia-framework';
export class Variables{
  @bindable({defaultBindingMode: bindingMode.twoWay}) var1;
  @bindable @observable var2;
  @bindable({defaultBindingMode: bindingMode.fromView}) var3;
  @bindable({defaultBindingMode: bindingMode.oneTime}) var4;
  @bindable({defaultBindingMode: bindingMode.toView}) var5;

  var2Changed(newVar2, oldVar2){
    console.log(newVar2, oldVar2);
  }
}
