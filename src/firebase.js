import * as firebase from 'firebase'

 var config = {
    apiKey: "AIzaSyBG6ScvUyRGnAE0l3bCu9hNxITW3OJxu48",
    authDomain: "reactfirebasereduxcrud.firebaseapp.com",
    databaseURL: "https://reactfirebasereduxcrud.firebaseio.com",
    projectId: "reactfirebasereduxcrud",
    storageBucket: "reactfirebasereduxcrud.appspot.com",
    messagingSenderId: "427971786017",
    appId: "1:427971786017:web:e93c33280bd6776c067a60"
  };

  
firebase.initializeApp(config)

export const database = firebase.database().ref('/notes')
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()