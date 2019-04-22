import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../../models/register.model';
import { RegisterService } from '../../services/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  register: Register = new Register('', '', '', '', '', '', new Date());

  constructor( public registerService: RegisterService ) { }

  ngOnInit() {
  }

  saveData( f: NgForm ) {
    console.log( f.value );
    console.log( f.valid );

    if ( f.invalid ) {
      return;
    }

    this.registerService.saveRegisters( this.register )
        .subscribe( register => {
          console.log(register);
        });

  }

}
