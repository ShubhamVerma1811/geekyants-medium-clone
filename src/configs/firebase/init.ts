import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.SNOWPACK_PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_MESSAGING_SENDER_ID,
  appId: import.meta.env.SNOWPACK_PUBLIC_APP_ID,
}
// firebase.js

firebase.initializeApp(firebaseConfig)

export default firebase
