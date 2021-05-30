function calculatePrice () {

    alert("Items succesfully added to cart!");

    var price = 0;

    document.getElementById("label").innerHTML = "You selected: " + "<br>";
    document.getElementById("label").style.fontWeight = "bold"
    document.getElementById("label").style.textAlign = "center";

    var checkBox = document.getElementsByTagName("input");

    if (checkBox[0].checked == true){

        if (document.getElementById("itemsSelected").innerHTML.indexOf("Chicken") >-1){

        }

        else {
            document.getElementById("itemsSelected").innerHTML = "Chicken" + "<br>";
            document.getElementById('itemsSelected').style.textAlign = "center";
        
        }

        price = price + parseInt(checkBox[0].value);
        
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Chicken") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Chicken","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[1].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Fish") >-1){

        }

        else {
            
        document.getElementById("itemsSelected").appendChild(document.createTextNode("Fish"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        
        }

        price = price + parseInt(checkBox[1].value);



    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Fish") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Fish","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[2].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Beef") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Beef"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        
        }

        price = price + parseInt(checkBox[2].value);
        
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Beef") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Beef","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[3].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Apples") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Apples"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";

        }
        
        price = price + parseInt(checkBox[3].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Apples") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Apples","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[4].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Pears") >-1) {

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Pears"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";

        }
        
        price = price + parseInt(checkBox[4].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Pears") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Pears","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[5].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Strawberries") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Strawberries"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[5].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Strawberries") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Strawberries","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[6].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Lemons") >-1) {

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Lemons"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[6].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Lemons") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Lemons","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[7].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Bananas") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Bananas"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[7].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Bananas") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Bananas","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[8].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Mangoes") >-1) {

        }
        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Mangoes"));
            document.getElementById("itemsSelected").appendChild(document.createElement("br"));
            document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[8].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Mangoes") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Mangoes","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[9].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Oranges") >-1) {

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Oranges"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[9].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Oranges") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Oranges","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[10].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Pumpkins") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Pumpkins"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[10].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Pumpkins") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Pumpkins","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[11].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Mint") >-1) {

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Mint"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[11].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Mint") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Mint","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[12].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Parsley") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Parsley"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[12].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Parsley") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Parsley","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[13].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Milk") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Milk"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[13].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Milk") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Milk","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[14].checked == true){
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Yogurt") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Yogurt"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[14].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Yogurt") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Yogurt","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[15].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Peanuts") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Peanuts"));
            document.getElementById("itemsSelected").appendChild(document.createElement("br"));
            document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[15].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Peanuts") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Peanuts","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[16].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Trail Mix") >-1) {

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Trail Mix"));
        document.getElementById("itemsSelected").appendChild(document.createElement("br"));
        document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[16].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Trail Mix") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Trail Mix","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    if (checkBox[17].checked == true){

        if(document.getElementById("itemsSelected").innerHTML.indexOf("Nuts") >-1){

        }

        else {
            document.getElementById("itemsSelected").appendChild(document.createTextNode("Nuts"));
            document.getElementById("itemsSelected").appendChild(document.createElement("br"));
            document.getElementById('itemsSelected').style.textAlign = "center";
        }
        
        price = price + parseInt(checkBox[17].value);
    }

    else {
        if(document.getElementById("itemsSelected").innerHTML.indexOf("Nuts") >-1) {
            var y= document.getElementById("itemsSelected").innerHTML.replace("Nuts","");
            document.getElementById("itemsSelected").innerHTML = y;
        }
    }

    document.getElementById("Price").innerHTML = "Your total price is: " + "$" + price; 
    document.getElementById("Price").style.textAlign = "center";


    
}