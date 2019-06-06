import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../../models/register.model';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

// import {MomentDateAdapter} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatDatepicker} from '@angular/material/datepicker';
import * as _moment from 'moment';
import { defaultFormat as _rollupMoment, Moment } from 'moment';

// const moment = _rollupMoment || _moment;
export const MY_FORMATS2 = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  // providers: [
  //   {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS2},
  // ],
})
export class RegisterComponent implements OnInit {

  nextVisit: string;
  register: Register = new Register('', '', '', '', '', '', '');

  constructor( 
    public registerService: RegisterService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onDateChanged( date ) {
    // console.log('Fecha pasada', date.toDate() );
    console.log('Fecha pasada', date.format('DD-MM-YYYY') );
    this.nextVisit = date.format('DD-MM-YYYY');
  }

  saveData( f: NgForm ) {
    console.log( f.value );
    console.log( f.valid );

    if ( f.invalid ) {
      return;
    }

    this.register.nextVisit = this.nextVisit;

    this.registerService.saveRegisters( this.register )
        .subscribe( register => {
          this.router.navigate(['/data']);
        });

  }

}
