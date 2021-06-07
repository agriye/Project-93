
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCNcQno2oxrMeHdLpNaljasJTmQ4j6ucuc",
      authDomain: "kwitter-25335.firebaseapp.com",
      projectId: "kwitter-25335",
      storageBucket: "kwitter-25335.appspot.com",
      messagingSenderId: "1017810430241",
      appId: "1:1017810430241:web:28ee821c57f5b6ac03b660"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
