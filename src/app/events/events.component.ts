import { Component, OnInit } from '@angular/core';
import { UpdateValuesService } from '../update-values.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', '../reg-suppliers/reg-suppliers.component.css']
})
export class EventsComponent implements OnInit {
  eventsInfo;
  constructor(public updateVal: UpdateValuesService) { };

  ngOnInit() {
    this.updateVal.get()
    .pipe(first())
    .subscribe((info) => {
      console.log(info['eventsInfo']);
      this.eventsInfo = info['eventsInfo'];
    });
  }

}
