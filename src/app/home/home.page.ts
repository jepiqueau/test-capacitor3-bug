import { Component } from '@angular/core';
import { JeepBugService } from '../services/jeepbug.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bugService: JeepBugService) {}

  async ionViewDidEnter() {
    if(this.bugService.isService) {
      try {
        const echo = await this.bugService.echo('hello world!');
        console.log(`$$$ echo ${JSON.stringify(echo)}`);
      } catch (error) {
        console.error(error);
     }

    } else {
      console.log('Error: bugService not initialized');
    }
  }

}
