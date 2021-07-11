import { Injectable } from '@angular/core';

import { Capacitor } from '@capacitor/core';
import { JeepBug } from 'capacitor-jeep-bug';

@Injectable()

export class JeepBugService {
  bugPlugin: any;
  isService = false;
  platform: string;
  initializePlugin(): Promise<boolean> {
    return new Promise (resolve => {
        this.platform = Capacitor.getPlatform();
        console.log(`*** platform ${this.platform}`);
        this.bugPlugin = JeepBug;
        console.log(`in Service bugPlugin ${JSON.stringify(this.bugPlugin)}`);
        this.isService = true;
        console.log(`$$$ in service this.isService ${this.isService} $$$`);
        resolve(true);
    });
  }
  /**
   * Echo a value
   *
   * @param value
   */
  async echo(value: string): Promise<any> {
  console.log(`&&&& in echo &&&&`);
      try {
          return await this.bugPlugin.echo({value});
      } catch (err) {
          console.log(`Error ${err}`);
          return Promise.reject(new Error(err));
      }
  }
}
