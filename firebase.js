var firebaseConfig = {
    apiKey: "AIzaSyA_EJ66nWBJZftLj2L8iyN7e9WR8t2ajGk",
    authDomain: "clone-2-3bd80.firebaseapp.com",
    projectId: "clone-2-3bd80",
    storageBucket: "clone-2-3bd80.appspot.com",
    messagingSenderId: "103206215691",
    appId: "1:103206215691:web:4b13ae03d3989a0ba1270e",
    measurementId: "G-RHQGT2FJLP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  var db = firebase.firestore();
  