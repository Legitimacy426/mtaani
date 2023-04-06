import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { getFirestore } from "firebase/firestore"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBa6eCLvszL_RyqQa_mrAEHhAF4dqLYVOs",
    authDomain: "newsapp-2317a.firebaseapp.com",
    projectId: "newsapp-2317a",
    storageBucket: "newsapp-2317a.appspot.com",
    messagingSenderId: "834473888616",
    appId: "1:834473888616:web:ca1bd4bc699e3a5ffc64dd"
  };
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const db = getFirestore()
const auth = getAuth()
export {firebase,db,auth}