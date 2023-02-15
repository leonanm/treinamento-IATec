import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-framework';

@autoinject

export class EventAgg{

  public received: Subscription[] = [];

  constructor(private msg: EventAggregator) {
  }

  attached() {
   this.received.push(this.msg.subscribe('mensagem-enviada', () => this.exibir() ));
   this.received.push(this.msg.subscribe('mensagem-enviada2', (control) => this.exibir(control)));
  }

  exibir(control?: string){
    console.log("Mensagem Recebida");
    console.log(control);
  }

  detached() {
    this.received.forEach(x => x.dispose());
  }
}


