function validacija(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="isko"){
        alert("USPESAN SI :-)");
        return false;
    }
    else{
        alert("Bedan si");
    }
}