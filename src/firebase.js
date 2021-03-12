import * as firebase from "firebase/app";
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDdIEIMPk0PBT5XMBtS65MfNsClJnXGU5w",
    authDomain: "auth-dedmo.firebaseapp.com",
    projectId: "auth-dedmo",
    storageBucket: "auth-dedmo.appspot.com",
    messagingSenderId: "833712869254",
    appId: "1:833712869254:web:6d024882af57261779a607",
    measurementId: "G-FGW56L4307"
})

export const auth = app.auth()
export default app
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    // user object
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}