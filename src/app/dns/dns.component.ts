import { Component, OnInit } from '@angular/core';
import { UpdateValuesService } from '../update-values.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dns',
  templateUrl: './dns.component.html',
  styleUrls: ['./dns.component.css', '../reg-suppliers/reg-suppliers.component.css']
})
export class DnsComponent implements OnInit {

  dns;
  constructor(public updateVal: UpdateValuesService) { };

  ngOnInit() {
    this.updateVal.get()
    .pipe(first())
    .subscribe((info) => {
      this.dns = info['dnsInfo'];
    });
  }

}
