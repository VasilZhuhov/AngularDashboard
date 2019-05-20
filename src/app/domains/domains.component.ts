import { Component, OnInit } from '@angular/core';
import { UpdateValuesService } from '../update-values.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css', '../reg-suppliers/reg-suppliers.component.css', '../kyc/kyc.component.css']
})
export class DomainsComponent implements OnInit {

  domains;
  constructor(public updateVal: UpdateValuesService) { };

  ngOnInit() {
    this.updateVal.get()
    .pipe(first())
    .subscribe((info) => {
      this.domains = info['domainsInfo'];
    });
  }

}
