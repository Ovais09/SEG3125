function a (){
    document.getElementById("Client").style.display = "none";
    document.getElementById("Cart").style.display = "none";
    document.getElementById("Products").style.display = "initial";
}

function b (){
    document.getElementById("Client").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "initial";
}

function c (){
    document.getElementById("Cart").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("Client").style.display = "initial";
}

function d () {
    var x = document.getElementById("options").value;
    var y =  document.getElementsByTagName("div");

    if (x =="nut allergies"){
       y[6].style.display = "none";
    }

    else {
        y[6].style.display = "block"
        y[6].style.textAlign = "center";
    }


}


document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "none";
});