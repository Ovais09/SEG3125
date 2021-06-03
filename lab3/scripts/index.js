var products = true; 

function a (){   

    if (products == true){
        products = false;
    document.getElementById("Client").style.display = "none";
    document.getElementById("Cart").style.display = "none";
    document.getElementById("Products").style.display = "initial";

    document.getElementById("back").style.display = "initial";

    document.getElementById("calculate").style.marginTop = "1.5%";
    

    var z  =  document.getElementsByTagName("div");

    z[26].style.marginLeft = "2%";
    document.getElementById("back").style.marginLeft = "8%";
    document.getElementById("back").style.marginTop = "-1.5%";

    document.getElementById("step").style.marginLeft = "75%";
    document.getElementById("step").style.marginTop = "-4%";
    

    

    var z  =  document.getElementsByTagName("div");
    z[1].style.color = "initial";
    z[2].style.color = "red";

    


    var x = document.getElementById("options").value;  
    var y =  document.getElementsByTagName("div");
    


    if (x =="Please Select"){
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
       y[24].style.display = "none";
       y[25].style.display = "none";
       
    }

    else if (x == "lactose-intolerant") {
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
        y[23].style.display = "initial";
        y[24].style.display = "initial";
        y[25].style.display = "initial";
    }

    else if (x== "nut allergies"){
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
        y[23].style.display = "none";
        y[24].style.display = "none";
        y[25].style.display = "none";
    }

    else if (x== "lactose-intolerant and nut allergies"){
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
        y[24].style.display = "none";
        y[25].style.display = "none";
    }

    else if (x =="organic"){
      
       y[8].style.display = "none";
       y[9].style.display = "none";
       y[10].style.display = "none";
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
       y[24].style.display = "initial";
       y[25].style.display = "initial";
    }

    else if (x =="organic and lactose-intolerant") {
      
       y[8].style.display = "none";
       y[9].style.display = "none";
       y[10].style.display = "none";
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
       y[23].style.display = "initial";
       y[24].style.display = "initial";
       y[25].style.display = "initial";
    }

    else if (x == "organic and nut allergies"){
       
       y[8].style.display = "none";
       y[9].style.display = "none";
       y[10].style.display = "none";
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
       y[23].style.display = "none";
       y[24].style.display = "none";
       y[25].style.display = "none";
    }

    else if (x== "organic and nut allergies and lactose-intolerant"){
        y[8].style.display = "none";
        y[9].style.display = "none";
        y[10].style.display = "none";
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
        y[24].style.display = "none";
        y[25].style.display = "none";

    }
   


    

    else {
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
       y[24].style.display = "initial";
       y[25].style.display = "initial";
        
    }

    }

    else {
        b();
        products = true;
        document.getElementById("step").style.display = "none";

        document.getElementById("back").style.display = "initial";

        document.getElementById("back").style.marginLeft = "42%";
        document.getElementById("back").style.marginTop = "2%";


        var m = document.getElementsByTagName("div");
        m[2].style.color = "black";
        m[3].style.color = "red";

        

    }

    
}

function b (){
    document.getElementById("Client").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "initial";
    
}

function c (){

    products = true;

    if (document.getElementById("Products").style.display=="initial"){

        document.getElementById("Cart").style.display = "none";
    document.getElementById("Products").style.display = "none";
    document.getElementById("Client").style.display = "initial";

    document.getElementById("back").style.display = "none";
    document.getElementById("step").style.display = "initial";


    var a = document.getElementsByTagName("div")
    a[2].style.color = "black";
    a[1].style.color = "red"
    a[3].style.color = "black";

    document.getElementById("step").style.marginLeft = "40%";
    document.getElementById("step").style.marginTop = "-1%";

    }

    else {

        var a = document.getElementsByTagName("div");
        document.getElementById("Cart").style.display = "none";
    document.getElementById("Products").style.display = "initial";
    document.getElementById("Client").style.display = "none";

    document.getElementById("step").style.display = "initial";

    document.getElementById("back").style.marginLeft = "5%";
    document.getElementById("back").style.marginTop = "-1.5%";

    a[1].style.color = "black";
    a[2].style.color = "red";
    a[3].style.color = "black";


    }

    
}


document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("Products").style.display = "none";
    document.getElementById("Cart").style.display = "none";
});

