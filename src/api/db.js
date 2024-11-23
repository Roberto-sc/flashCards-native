import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDhwluua5E57arQOkNd_2xWlW2UvVay784",
  authDomain: "flashcards-native-30865.firebaseapp.com",
  projectId: "flashcards-native-30865",
  storageBucket: "flashcards-native-30865.appspot.com",
  messagingSenderId: "506550046457",
  appId: "1:506550046457:web:560a1e6da3cf5691001c28"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore(app)

export const auth = getAuth(app)