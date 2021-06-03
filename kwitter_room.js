
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDUJszjil0g4vgEue8LaEpshj79w4Zoba8",
      authDomain: "class-test-817de.firebaseapp.com",
      databaseURL: "https://class-test-817de-default-rtdb.firebaseio.com",
      projectId: "class-test-817de",
      storageBucket: "class-test-817de.appspot.com",
      messagingSenderId: "673949863127",
      appId: "1:673949863127:web:8b2fa73f149e8adfab3492"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
