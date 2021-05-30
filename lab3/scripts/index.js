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
    
    

    if (x =="Please Select"){
       y[6].style.display = "none";
       y[7].style.display = "none";
       y[8].style.display = "none";
       y[9].style.display = "none";
       y[10].style.display = "none";
       y[11].style.display = "none";
       y[12].style.display = "none";
       y[13].style.display = "none";
       y[14].style.display = "none";
       y[15].style.display = "none";
       y[16].style.display = "none";
       y[17].style.display = "none";
       y[18].style.display = "none";
       y[19].style.display = "none";
       y[20].style.display = "none";
       y[21].style.display = "none";
       y[22].style.display = "none";
       y[23].style.display = "none";
       
    }

    else if (x == "lactose-intolerant") {
       y[6].style.display = "initial";
       y[7].style.display = "initial";
       y[8].style.display = "initial";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
       y[19].style.display = "none";
        y[20].style.display = "none";
        y[21].style.display = "initial";
        y[22].style.display = "initial";
        y[23].style.display = "initial";
    }

    else if (x== "nut allergies"){
        y[6].style.display = "initial";
       y[7].style.display = "initial";
       y[8].style.display = "initial";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
        y[19].style.display = "initial";
        y[20].style.display = "initial";
        y[21].style.display = "none";
        y[22].style.display = "none";
        y[23].style.display = "none";
    }

    else if (x== "lactose-intolerant and nut allergies"){
        y[6].style.display = "initial";
       y[7].style.display = "initial";
       y[8].style.display = "initial";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
        y[19].style.display = "none";
        y[20].style.display = "none";
        y[21].style.display = "none";
        y[22].style.display = "none";
        y[23].style.display = "none";
    }

    else if (x =="organic"){
       y[6].style.display = "none";
       y[7].style.display = "none";
       y[8].style.display = "none";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
       y[19].style.display = "initial";
       y[20].style.display = "initial";
       y[21].style.display = "initial";
       y[22].style.display = "initial";
       y[23].style.display = "initial";
    }

    else if (x =="organic and lactose-intolerant") {
       y[6].style.display = "none";
       y[7].style.display = "none";
       y[8].style.display = "none";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
       y[19].style.display = "none";
       y[20].style.display = "none";
       y[21].style.display = "initial";
       y[22].style.display = "initial";
       y[23].style.display = "initial";
    }

    else if (x == "organic and nut allergies"){
       y[6].style.display = "none";
       y[7].style.display = "none";
       y[8].style.display = "none";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
       y[19].style.display = "initial";
       y[20].style.display = "initial";
       y[21].style.display = "none";
       y[22].style.display = "none";
       y[23].style.display = "none";
    }

    else if (x== "organic and nut allergies and lactose-intolerant"){
        y[6].style.display = "none";
        y[7].style.display = "none";
        y[8].style.display = "none";
        y[9].style.display = "initial";
        y[10].style.display = "initial";
        y[11].style.display = "initial";
        y[12].style.display = "initial";
        y[13].style.display = "initial";
        y[14].style.display = "initial";
        y[15].style.display = "initial";
        y[16].style.display = "initial";
        y[17].style.display = "initial";
        y[18].style.display = "initial";
        y[19].style.display = "none";
        y[20].style.display = "none";
        y[21].style.display = "none";
        y[22].style.display = "none";
        y[23].style.display = "none";

    }
   


    

    else {
       y[6].style.display = "initial";
       y[7].style.display = "initial";
       y[8].style.display = "initial";
       y[9].style.display = "initial";
       y[10].style.display = "initial";
       y[11].style.display = "initial";
       y[12].style.display = "initial";
       y[13].style.display = "initial";
       y[14].style.display = "initial";
       y[15].style.display = "initial";
       y[16].style.display = "initial";
       y[17].style.display = "initial";
       y[18].style.display = "initial";
       y[19].style.display = "initial";
       y[20].style.display = "initial";
       y[21].style.display = "initial";
       y[22].style.display = "initial";
       y[23].style.display = "initial";
        
    }


}


document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "none";
});