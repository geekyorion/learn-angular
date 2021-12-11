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

  constructor() {
    setTimeout(() => {
      this.shouldAllowAddingServer = true;
    }, 1000);
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
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
