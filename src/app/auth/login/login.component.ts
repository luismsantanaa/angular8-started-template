import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-ligin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    document.body.className = '';
  }

  constructor() { }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition login-page';
  }

}
