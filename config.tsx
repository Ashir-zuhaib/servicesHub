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
// const firebaseConfig = {
//   apiKey: "AIzaSyBJ85mz504xe0NvV1IIpLGurtlzOGwC0cU",
//   authDomain: "talk2steve-3849c.firebaseapp.com",
//   databaseURL: "https://talk2steve-3849c-default-rtdb.firebaseio.com",
//   projectId: "talk2steve-3849c",
//   storageBucket: "talk2steve-3849c.appspot.com",
//   messagingSenderId: "236205673310",
//   appId: "1:236205673310:web:cc7439a9f81d4400a05dcf",
//   measurementId: "G-GWYP5NN20G"
// };

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
