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
  update(observable: Observable<T>,Event:Event<T>): string;
}



/**
 * @class Button that implements the Observable interface, i.e.,
 * 
 */
export class Button<T> implements Observable<T> {
  private observers: Observer<T>[] = [];
  

  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }


  subscribe(observer: Observer<T>) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer<T>) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify(Event:Event<T>): void {
    this.observers.forEach((observer) => observer.update(this,Event));
  }

  public Evento_nuevo(evento:Event<T>)
  {
    this.notify(evento)
  }
}

/**
 * Class ButtonObserver that implements the interface Observer, i.e.,
 * it is able to observe other objects
 */
export class ButtonObserver implements Observer<unknown> {
  constructor(private id: number, private name: string) {
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }

  update(observable: Observable<unknown>,Event:Event<unknown>): string {
     return "El evento" + Event.data + "con el tipo" + typeof(Event) + "ha regsitrado un evento"
  }
}
