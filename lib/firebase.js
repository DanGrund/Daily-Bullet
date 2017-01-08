import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBfiPEEhXeqvwIRS-K7rlBYEZpZjZr_Hus",
  authDomain: "dailybullet.firebaseapp.com",
  databaseURL: "https://dailybullet.firebaseio.com",
  storageBucket: "dailybullet.appspot.com",
  messagingSenderId: "718106157501"
  };

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export function signIn() {
  return firebase.auth().signInWithPopup(provider);
}

export function signOut(){
  return firebase.auth().signOut();
}
