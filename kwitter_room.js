var name = localStorage.getItem('username');
document.getElementById('dispname').innerHTML='Welcome '+ name + '!';
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAT-R2qSoxAE8cdOPk77HkQXMPuiQbfLJE",
      authDomain: "c93-97-5f6eb.firebaseapp.com",
      databaseURL: "https://c93-97-5f6eb-default-rtdb.firebaseio.com",
      projectId: "c93-97-5f6eb",
      storageBucket: "c93-97-5f6eb.appspot.com",
      messagingSenderId: "651576943469",
      appId: "1:651576943469:web:9086f1e0e91a2118403064",
      measurementId: "G-XNH7S3VK2S"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   // const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
