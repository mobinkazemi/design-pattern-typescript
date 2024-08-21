import { Observer } from "./observer.interface";

export interface Subject {
  registerObserver: (o: Observer) => void;
  removeObserver: (o: Observer) => void;
  notifyObservers: () => void;
}
