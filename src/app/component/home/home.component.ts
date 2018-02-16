import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('list', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.2s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .2, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
          ,
        query(':leave', stagger('300ms', [
          animate('.3s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .2, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  title = 'todo-listing';
  formdata: String;
  list = [];
  count: Number;
  errortext: string;
  constructor(private _data: DataService) {
  }
  ngOnInit() {
    
    this._data.list.subscribe(res => this.list = res);
    this._data.updateList(this.list);
    this.count = this.list.length;
  }
  addList (x) {
  this.list.push(x);
  this.count = this.list.length;
  this._data.updateList(this.list);
  // return this.count;
}
  removeList(x) {
    this.list.splice(x, 1);
    this.count = this.list.length;
    this._data.updateList(this.list);
    // return this.count;
  }
  getCount() {
    return this.count;
  }


  addItem() {
   this.addList(this.formdata);
  this.formdata = '';
  }

  removeItem(x) {
    this.removeList(x);
  }
}
