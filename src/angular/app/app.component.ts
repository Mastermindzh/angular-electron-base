import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    message: string;

  constructor(private _electronService: ElectronService) {
    this.message = "Hello from the constructor";
  }

  public onClickMe() {
    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.send('sayhi', { title: 'Hello electron!', body: "Click me!" });
    } else {
      this.notAnElectronApp();
    }
  }

  public devTools(){
    if(this._electronService.isElectronApp){
      this._electronService.ipcRenderer.send('devtools',{command: "open"});
    }else{
      this.notAnElectronApp();
    }
  }


  public notAnElectronApp(){
    alert("Not running as an electron App.");
  }
}
