import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todos } from './comment';

@Injectable()
export class DataService {
  private cList = new BehaviorSubject<any>(['Add your task to the to-do list', 'Click on "x" to remove the task']);
  private cUpdates = new BehaviorSubject<Todos>();
  list = this.cList.asObservable();
  update = this.cUpdates.asObservable();
  constructor() {
  }

updateList(list) {
  this.cList.next(list);
}

updateComments(list) {
  this.cUpdates.next(list);
}
getListComments(id){
  return this.update[id];
}
getList(id) {
  console.log(this.list);
  return this.list.source.value[id];
}

}
