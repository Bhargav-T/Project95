function addUser(){
    if(document.getElementById("username").value != ""){
        
    username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location = "kwitter_room.html";
    }
    else{
        document.getElementById("WARNING").innerHTML = "NAME IS NOT INSERTED PLEASE INPUT A NAME";
    }
}

