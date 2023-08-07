export interface IActionSender_Type1 {
  sendAction_t1(action: string): Promise<void>;
}

export class ActionSender_Type1 implements IActionSender_Type1 {
  sendAction_t1(action: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log("Event Created: ", action);
      resolve();
    });
  }
}

export class Client1 {
  actionCreator: IActionSender_Type1;
  constructor() {
    this.actionCreator = new ActionSender_Type1();
  }
  async call(msg: string) {
    await this.actionCreator.sendAction_t1(msg);
  }
}

// -----

export interface IActionSender_Type2 {
  sendAction_t2(eventName: string): void;
}

export class ActionSender_Type2 implements IActionSender_Type2 {
  sendAction_t2(action: string): void {
    console.log("Event Created: ", action);
  }
}

export class Client2 {
  actionCreator: IActionSender_Type2;
  constructor() {
    this.actionCreator = new ActionSender_Type2();
  }
  async call(msg: string) {
    this.actionCreator.sendAction_t2(msg);
  }
}

// -----
// Here we obviously have differece in sending action base on client we choose
const c1 = new Client1();
c1.call("Action sent from c1").then();

const c2 = new Client2();
c2.call("Action sent from c2");

// -----
// So if we write an adapter that merges these two different implementations,
// then other clients do not need to consider different approaches while sending an action
export class ActionAdapter implements IActionSender_Type1 {
  eventSender: IActionSender_Type2;

  constructor(eventSender: IActionSender_Type2 = new ActionSender_Type2()) {
    this.eventSender = eventSender;
  }

  public async sendAction_t1(action: string): Promise<void> {
    this.eventSender.sendAction_t2(action);
  }
}

export class Client3 {
  actionCreator: IActionSender_Type1;
  constructor() {
    this.actionCreator = new ActionSender_Type1();
  }
  async call(msg: string) {
    this.actionCreator = new ActionAdapter();
    this.actionCreator.sendAction_t1(msg);
  }
}

const c3 = new Client3();
c3.call("Action sent from c3").then();
