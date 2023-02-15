import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { cloneDeep } from 'lodash';
@autoinject
export class App {
  list: IPerson[];
  search: string;
  public person: IPerson;
  var1: string;
  var2: string;
  var3: string;
  var4 = "Var4";
  var5: string;

  num: number;

  constructor(private msg: EventAggregator) { }

  send() {
    console.log("Mensagem1 Enviada");
    this.msg.publish('mensagem-enviada');
    console.log("Mensagem2 Enviada");
    this.msg.publish('mensagem-enviada2', 'control');
  }

  attached() {
    this.list =
      [
        { id: 1 ,name: 'Marcio Martins', cpf: '73894891849', email: 'marcio@martins.com' },
        { id: 2 ,name: 'Maria Silva', cpf: '12234123521', email: 'maria@silva.com' },
        { id: 3 ,name: 'Mario Gabriel', cpf: '12354462252', email: 'mario@gabriel.com' }
      ]
  }

  public showForm(i: IPerson) {
    this.person = cloneDeep(i);
  }

  saveForm(newPerson){ 
    const index = this.list.findIndex(y => y.id === newPerson.id);
    if(index == -1){
      return;
    }
    this.list.splice(index, 1 , newPerson)
    this.cancelForm();
  }

  cancelForm(){
    this.person = null;
  }
}


  


export interface IPerson {
  id: number;
  name: string;
  cpf: string;
  email: string;
}

