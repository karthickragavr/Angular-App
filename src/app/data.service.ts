import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private cList = new BehaviorSubject<any>(['Add your task to the to-do list', 'Click on "x" to remove the task']);
  list = this.cList.asObservable();
  constructor() {
  }

updateList(list) {
  this.cList.next(list);
}
getList (id) {
  return this.list[id];
}

}
