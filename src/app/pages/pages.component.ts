import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    document.body.className = '';
  }

  constructor() { }

  ngOnInit(): void {
    window.dispatchEvent(new Event('resize'));
    document.body.className = '';
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    $(document).ready(() => {
      $('.knob').knob();
    });
    init_plugins();
  }

}
