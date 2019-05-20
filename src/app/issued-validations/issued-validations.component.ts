import { Component, OnInit } from '@angular/core';
import { UpdateValuesService } from '../update-values.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-issued-validations',
  templateUrl: './issued-validations.component.html',
  styleUrls: ['./issued-validations.component.css', '../reg-suppliers/reg-suppliers.component.css']
})
export class IssuedValidationsComponent implements OnInit {

  issuedValidations;
  constructor(public updateVal: UpdateValuesService) { };

  ngOnInit() {
    this.updateVal.get()
    .pipe(first())
    .subscribe((info) => {
      this.issuedValidations = info['issuedValInfo'];
    });
  }

}
