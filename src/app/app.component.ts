import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyBuZ3nNSYuv7FZhckazIqP5xycE4BEtgcc',
      authDomain: 'booksdatabase-1e145.firebaseapp.com',
      databaseURL: 'https://booksdatabase-1e145.firebaseio.com',
      projectId: 'booksdatabase-1e145',
      storageBucket: '',
      messagingSenderId: '716966095686'
    };
    firebase.initializeApp(config);
  }
}
