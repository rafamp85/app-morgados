import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit {

  rows = [];

  constructor( public registerService: RegisterService ) { }

  ngOnInit() {
    this.registerService.getRegisters()
        .subscribe( (resp: any) => this.rows = resp );
  }

}
