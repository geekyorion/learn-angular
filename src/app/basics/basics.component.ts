import { Component, OnInit } from '@angular/core';

@Component({  // decorator to tell angular that it is not a normal class
  selector: 'app-basics', // tag to call this component in the html file
  templateUrl: './basics.component.html', // html template
  styleUrls: ['./basics.component.css'] // multiple css files can be used
})
export class BasicsComponent implements OnInit {

  serverID: number = 10;
  serverStatus: string = 'offline';

  shouldAllowAddingServer: boolean = false;
  demoServerName: string = 'demoServer';

  constructor() {
    setTimeout(() => {
      this.shouldAllowAddingServer = true;
    }, 1000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  serverCreationStatus: string = "No server is created";
  isServerCreated: boolean = false;
  // an event binded function should start with 'on' to indicate that it is binded with an event in HTML file
  onCreateServer() {
    this.isServerCreated = true;
    this.serverCreationStatus = "Server is created";
  }

  serverName: string = "";
  onInputServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return (this.serverStatus === 'online' ? 'green' : 'red');
  }

  randomNumbers: number[] = [];
  addARandomNumber() {
    this.randomNumbers.push(~~(Math.random() * 1000) % 1000);
  }

}

/*
  main.ts
    |--platformBrowserDynamic().bootstrapModule(AppModule) // this line bootstrap the AppModule
        |-- app.module.ts // contains the AppModule export
            |-- bootstrap: [AppComponent] // this section tell angular that at start it should know about AppComponent
                |-- app.component.ts // it has the selector app-root which is in the index.html file
                                        and angular renders the app component markup
*/
