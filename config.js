import firebase from "firebase";

// import "firebase/auth";
// import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCT76oxK5ddeTvQTvE7jnaVCzd9ofiEYXE",
  authDomain: "serviceshub-46f1a.firebaseapp.com",
  projectId: "serviceshub-46f1a",
  storageBucket: "serviceshub-46f1a.appspot.com",
  messagingSenderId: "556827763687",
  appId: "1:556827763687:web:8578702c7df8a98c649342",
  measurementId: "G-5YG2VWE79W",
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
