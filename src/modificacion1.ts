/**
 * Interface for observable classes
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(Event:Event<T>): void;
}

export interface Event<T>{
  id:number;
  name:string;
  data:T;
}


export interface Observer<T> {
  update(observable: Observable<T>,Event:Event<T>): void;
}



/**
 * @class Button that implements the Observable interface, i.e.,
 * 
 */
export class Button<T> implements Observable<T> {
  private observers: Observer<T>[] = [];
  
   /** @constructor inzilaizamos con un identificador */
  constructor(private id: number, private name: string) {
  }
  /** @public getter de id */
  getId() {
    return this.id;
  }
  /**@public getter de nombre */
  getName() {
    return this.name;
  }

  /** @public metodo para suscribir  */
  subscribe(observer: Observer<T>) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
  /** @public metodo para desuscribir  */
  unsubscribe(observer: Observer<T>) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
  /** notificar cuando ocurre un evento nuevo */
  notify(Event:Event<T>): void {
    this.observers.forEach((observer) => observer.update(this,Event));
  }

  public Evento_nuevo(evento:Event<T>)
  {
    this.notify(evento)
  }
}

/**
 * @class clase del Observador
 */
export class ButtonObserver implements Observer<unknown> {
  constructor(private id: number, private name: string) {
  }
  /** @public getters id */
  getId() {
    return this.id;
  }
  /** @public getters name */
  getName() {
    return this.name;
  }
  /**@public actualza el evento al usuario */
  update(observable: Observable<unknown>,Event:Event<unknown>): void {
     console.log("El evento " + Event.data + "con el tipo " + typeof(Event.data) + " ha regsitrado un evento para " + observable);
  }
}
