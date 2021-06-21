function creditcardCheck () {

    var x  = document.getElementById("cc-number").value;
    var y = document.getElementById("cc-cvv").value;
    var z = document.getElementById("phone").value
    var e4 = document.getElementById("firstname").value;
    var e5 = document.getElementById("lastname").value;
    var e6 = document.getElementById("nameoncard").value;

    var credit = document.getElementById("credit");
    var debit = document.getElementById("debit");
    var paypal = document.getElementById("paypal");

    var e41 = document.getElementById("firstname")
    var e51 = document.getElementById("lastname")
    var e61 = document.getElementById("nameoncard")



    var regExp = /[a-zA-Z`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    

    if (x.length <19 || y.value<3 || z.value <11 || e41.length==0 || e51.length==0 || e61.value == 0 || ((credit.checked==false) && (debit.checked==false) && (paypal.checked ==false)) ){


        if ((credit.checked==false) && (debit.checked==false) && (paypal.checked ==false))  {
            alert("please select a payment method");
        }


        if (z.value <11) {
            alert("please enter a phone number that matches the placeholder");
            var x  = document.getElementById("cc-number").value = "";
            var y = document.getElementById("cc-cvv").value = ""
            var z = document.getElementById("phone").value = ""
            var e4 = document.getElementById("firstname").value = ""
            var e5 = document.getElementById("lastname").value = ""
            var e6 = document.getElementById("nameoncard").value = ""
        }

        if (e41.length==0 || e51.length==0 || e61.value == 0){
            alert("please enter a proper name");
            var x  = document.getElementById("cc-number").value = "";
            var y = document.getElementById("cc-cvv").value = ""
            var z = document.getElementById("phone").value = ""
            var e4 = document.getElementById("firstname").value = ""
            var e5 = document.getElementById("lastname").value = ""
            var e6 = document.getElementById("nameoncard").value = ""
        }

        else {
            console.log("stupid")
        alert("please enter your credit card again");
        var x  = document.getElementById("cc-number").value = "";
            var y = document.getElementById("cc-cvv").value = ""
            var z = document.getElementById("phone").value = ""
            var e4 = document.getElementById("firstname").value = ""
            var e5 = document.getElementById("lastname").value = ""
            var e6 = document.getElementById("nameoncard").value = ""
        }

        


    if (regExp.test(x)){
        
    }

  
  
    }

    else {
        
        document.getElementById("checkout").setAttribute("data-bs-toggle", "modal");
        document.getElementById("checkout").setAttribute("data-bs-target", "#exampleModal");

        
    }



}
 
 
    
