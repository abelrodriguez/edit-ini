import { Component } from '@angular/core';
import { ElectronService } from './core/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { ConnectionbdService } from './core/connectionbd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public electronService: ElectronService,
    private translate: TranslateService,
    private bd: ConnectionbdService) {

    translate.setDefaultLang('en');

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      // console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      // console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
