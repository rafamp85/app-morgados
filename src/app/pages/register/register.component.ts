import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from '../../models/register.model';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  register: Register = new Register('', '', '', '', '', '', new Date());

  constructor( 
    public registerService: RegisterService,
    public router: Router
  ) { }

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
          this.router.navigate(['/data']);
        });

  }

}
