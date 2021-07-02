// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAW2bEkMDWJsfYW7dTeGrppdmdiSbELj0c",
    authDomain: "covid19bot-vbeu.firebaseapp.com",
    databaseURL: "https://covid19bot-vbeu-default-rtdb.firebaseio.com",
    projectId: "covid19bot-vbeu",
    storageBucket: "covid19bot-vbeu.appspot.com",
    messagingSenderId: "999548433551",
    appId: "1:999548433551:web:685847f5d54d389001acfa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + username+ " !";

function add_room(){
    roomname=document.getElementById("room_name").value;
    localStorage.setItem("room_name",roomname);
    firebase.database().ref("/").child(roomname).update({purpose:"adding room name"});
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("roomname-" + Room_names);
    row = "<div class = 'Room_names' id = "+Room_names +  " onclick = 'redirect_room(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirect_room(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

