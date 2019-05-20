import { Component, OnInit } from '@angular/core';
import { UpdateValuesService } from '../update-values.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css', '../reg-suppliers/reg-suppliers.component.css']
})
export class KYCComponent implements OnInit {
  kycInfo;
  constructor(public updateVal: UpdateValuesService) { };

  ngOnInit() {
    this.updateVal.get()
    .pipe(first())
    .subscribe((info) => {
      this.kycInfo = info['kycInfo'];
    });
  }
  
}
