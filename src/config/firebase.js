import *as firebase from 'firebase/app'
import 'firebase/firestore'

import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDU7x541s292anBfChEWuQkKJqa_Bn7rNM",
    authDomain: "corporate-app-1f6d1.firebaseapp.com",
    databaseURL: "https://corporate-app-1f6d1.firebaseio.com",
    projectId: "corporate-app-1f6d1",
    storageBucket: "corporate-app-1f6d1.appspot.com",
    messagingSenderId: "73615195493",
    appId: "1:73615195493:web:8593a8eef8119d22ca358c",
    measurementId: "G-ZM207Y9SJ1"
}

firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage();
export default firebase