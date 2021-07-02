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

  username = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

  function send(){
    if(document.getElementById("msg").value != ""){
        msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
      });
      document.getElementById("msg").value = "";
    }
    else{
        document.getElementById("WARNING_2").innerHTML = "TEXT IS NOT INSERTED PLEASE INSERT TEXT";
    }

      
  }

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}