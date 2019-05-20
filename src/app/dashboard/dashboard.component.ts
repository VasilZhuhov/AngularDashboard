import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../app.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  //subscriptions = [];
  constructor() {
  }

  ngOnInit() {
    /*this.subscriptions.push(this.updateVal.get().subscribe(info => {
      console.log(info);
    }));*/
  }

  ngOnDestroy() {
    // for (const s of this.subscriptions) {
    //   s.unsubscribe();
    // }
  }
}
