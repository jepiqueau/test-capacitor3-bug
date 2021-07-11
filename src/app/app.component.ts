import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { JeepBugService } from './services/jeepbug.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private initPlugin: boolean;
  constructor(
    private platform: Platform,
    private bugService: JeepBugService,
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(async () => {
      this.bugService.initializePlugin().then(ret => {
        this.initPlugin = ret;
        console.log(`>>>> in App  this.initPlugin ${this.initPlugin}`);
        console.log(`>>>> in App  platform ${this.bugService.platform}`);
      });
    });
  }
}
