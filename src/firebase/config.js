import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzylIz6aEt1SLW9Y_jkeqVMEAw9xCLf-0",
  authDomain: "live-chat-ba8d3.firebaseapp.com",
  projectId: "live-chat-ba8d3",
  storageBucket: "live-chat-ba8d3.appspot.com",
  messagingSenderId: "567619968710",
  appId: "1:567619968710:web:607d917d583e14f85b81c7"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timeStamp }