import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  setting: ISetting = { theme: 'skin-blue' };

  constructor( @Inject(DOCUMENT) private myDocument ) {
    this.getSetting();
   }

  getSetting() {
    if (localStorage.getItem('settings')) {
      this.setting = JSON.parse(localStorage.getItem('settings'));
      this.loadTheme(this.setting.theme);
    } else {
      this.loadTheme(this.setting.theme);
    }
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.setting));
  }

  loadTheme(skin: string) {
    document.body.className = '';
    document.body.className = `hold-transition ${skin} sidebar-mini`;

    this.setting.theme = skin;

    this.saveSettings();
  }

}

interface ISetting {
  theme: string;
}