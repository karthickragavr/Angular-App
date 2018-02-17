import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  index: any;
  taskdata: string;
  constructor(private route: ActivatedRoute, private _data: DataService) { }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
        //console.log(params); {id: 0}
        this.index = params.id;
      console.log(this.index);
      });
      this.taskdata = this._data.getList(this.index);
      console.log(this.taskdata);
  }

}
