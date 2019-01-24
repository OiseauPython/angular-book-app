import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	constructor() {
		var config = {
			apiKey: "AIzaSyBgBs1GyO0DWJlSk9OtfjAD0YPpPcbAECs",
			authDomain: "book-app-d8837.firebaseapp.com",
			databaseURL: "https://book-app-d8837.firebaseio.com",
			projectId: "book-app-d8837",
			storageBucket: "gs://book-app-d8837.appspot.com/",
			messagingSenderId: "132566906554"
		};
		firebase.initializeApp(config);
	}
}
