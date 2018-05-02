import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email = "";
  pass = "";
  loggedUser: any = {};

  constructor(public afAuth: AngularFireAuth, public afDataBase: AngularFireDatabase){
    this.afAuth.authState.subscribe((response)=>{
      console.log("se chequeo el logueo", response);
      this.loggedUser = response ? response : {};
    }, (error)=>{
      console.log("error al chequear logueo", error);
    })
  }

  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.pass)
     .then((response) => {
      console.log("se logueo correctamente");
      //cada vez que se logueo o desloguea entra al subscribe del constructor
     })
     .catch(error => console.log(error));     
  }

  gmailLoggedIn(){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(response => {
      console.log("se logueo correctamente. usuario:", response);
    })
    .catch(error => {console.log("error al loguearse con google")});
  }

  registrarse(){
    debugger;
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.pass)
     .then((response) => {
       console.log("se registro correctamente. usuario:", response);
       //cada vez que se logueo o desloguea entra al subscribe del constructor
    //   this.loggedUser = response;
     })
     .catch(error => console.log("error al registrarse",error));
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(response => {
      console.log("se deslogueo correctamente. respuesta:", response);
      this.loggedUser = {};
    })
    .catch(error => console.log("error al desloguearse", error));
  }

}
