import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcBNKI7VzqmD7DMI2U3dQMPtIJRVXvYV0",
  authDomain: "actividad-10-luis-lozoya.firebaseapp.com",
  databaseURL: "https://actividad-10-luis-lozoya-default-rtdb.firebaseio.com",
  projectId: "actividad-10-luis-lozoya",
  storageBucket: "actividad-10-luis-lozoya.appspot.com",
  messagingSenderId: "787078843959",
  appId: "1:787078843959:web:ce0c6144541fa9ec28b9b2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
