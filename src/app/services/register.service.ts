import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Config Path to Services
import { URL_SERVICES } from '../config/config';
import { Register } from '../models/register.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( public http: HttpClient ) { }

  getRegisters() {
    const url = URL_SERVICES + '/register';

    return this.http.get( url )
        .pipe(
          map( (resp: any) => {
            return resp.registers;
          })
        );
  }

  saveRegisters( register: Register ) {
    const url = URL_SERVICES + '/register';

    return this.http.post( url, register )
                .pipe(
                  map( (resp: any) => {
                    console.log('Guardado', resp);
                  })
                );
  }
}
