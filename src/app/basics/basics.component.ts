import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
