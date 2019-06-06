import { Component, OnInit } from '@angular/core';

declare const validateActiveNotif: any;
declare const requestNotification: any;
declare const cancelSubscription: any;


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  notifActive = false;

  constructor() { }

  ngOnInit() {
    this.notifActive = validateActiveNotif();
    console.log('Notificaciones', this.notifActive);
  }

  activateNotif() {
    requestNotification();
    this.notifActive = true;
  }

  cancelNotif(){
    cancelSubscription();
    this.notifActive = false;
  }

}
