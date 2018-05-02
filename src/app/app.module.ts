import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ImplicitReceiver } from '@angular/compiler';

export const firebaseConfig = {
  apiKey: "AIzaSyA4M7hnrIGdpb3ETAYWcZNU8Xcclyvu244",
  authDomain: "practicaclase1-592dd.firebaseapp.com",
  databaseURL: "https://practicaclase1-592dd.firebaseio.com",
  projectId: "practicaclase1-592dd",
  storageBucket: "practicaclase1-592dd.appspot.com",
  messagingSenderId: "148388018465"
};


@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
