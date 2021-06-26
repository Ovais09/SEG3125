function creditcardCheck () {

    var x  = document.getElementById("cc-number");
    var y = document.getElementById("cc-cvv");
    var z = document.getElementById("phone");
   

    var credit = document.getElementById("credit");
    var debit = document.getElementById("debit");
    var paypal = document.getElementById("paypal");

    var e41 = document.getElementById("firstname")
    var e51 = document.getElementById("lastname")
    var e61 = document.getElementById("nameoncard")



    if (x.value.length <19 || y.value.length<3 || z.value.length <11 || e41.value.length == 0 || e51.value.length== 0 || e61.value.length == 0 || ((credit.checked==false) && (debit.checked==false) && (paypal.checked ==false)) ){


        if ((credit.checked==false) && (debit.checked==false) && (paypal.checked ==false))  {
            alert("please select a payment method");
        }


        if (z.value.length <11) {
            alert("please enter a phone number that matches the placeholder");
        }

        if (e41.value.length == 0 || e51.value.length == 0 || e61.value.length == 0){
            alert("please enter a proper name");
        }

        if (x.value.length <19 || y.value.length<3) {
            alert("please enter your credit card again");
        }

        document.getElementById("cc-number").value = "";
        document.getElementById("cc-cvv").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("firstname").value = ""
        document.getElementById("lastname").value = ""
        document.getElementById("nameoncard").value = ""

  
  
    }

    else {
        
        document.getElementById("checkout").setAttribute("data-bs-toggle", "modal");
        document.getElementById("checkout").setAttribute("data-bs-target", "#exampleModal");

        
    }



}
 
 
    
