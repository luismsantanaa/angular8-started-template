import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    document.body.className = '';
  }

  constructor() { }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'hold-transition register-page';
  }

}
