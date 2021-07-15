

import Score from "../website_images/score.png";
import React from "react";
import ErrorBoundary from "./ErrorBoundary";

import "./Step3.css"



function Step3 () {


    try {
        document.getElementsByClassName("question")[0].style.display = "none";
        document.getElementsByClassName("question")[1].style.display = "none";
        document.getElementsByClassName("question")[2].style.display = "none";
    
        document.getElementsByClassName("input")[0].style.display = "none";
        document.getElementsByClassName("input")[1].style.display = "none";
        document.getElementsByClassName("input")[2].style.display = "none";
    
        document.getElementsByTagName("p")[0].style.display = "none";
        document.getElementsByTagName("p")[1].style.display = "none";
        document.getElementsByTagName("p")[2].style.display = "none";
        document.getElementsByTagName("p")[3].style.display = "none";
    
        document.getElementById("submit").style.display = "none";
    
        document.getElementById("step2").style.color = "black";
        document.getElementById("step3").style.color = "darkred";
    }

    catch (error) {

        document.getElementById("step2").style.color = "black";
        document.getElementById("step3").style.color = "darkred";

        document.getElementsByClassName("question2")[0].style.display = "none";
        document.getElementsByClassName("question2")[1].style.display = "none";
        document.getElementsByClassName("question2")[2].style.display = "none";

        document.getElementById("input1").style.display = "none";
        document.getElementById("input2").style.display = "none";
        document.getElementById("input3").style.display = "none";

        document.getElementsByTagName("p")[0].style.display = "none";
        document.getElementsByTagName("p")[1].style.display = "none";
        document.getElementsByTagName("p")[2].style.display = "none";
        document.getElementsByTagName("p")[3].style.display = "none";

        document.getElementById("submit").style.display = "none";

        return (
            <div>
                <ErrorBoundary>
                <img src = {Score} alt = "score" id = "scorei"></img>
              <h1 class = "iq2">Votre QI est de 100 et vous êtes dans le 95e centile !</h1>
              <h1 class = "iq">Si vous souhaitez refaire le test, rafraîchissez simplement la page !</h1>
                </ErrorBoundary>
            </div>
        )

    }

   


    try {
        return (
            <div>
              <img src = {Score} alt = "score" width = "100%" height = "200px"> </img>
              <h1>Your IQ is 100 and you are in the 95th percentile!</h1>
          </div>
              )
    }

    catch (error) {
        return (
            <div>
              <img src = {Score} alt = "score" width = "100%" height = "200px"> </img>
              <h1>Your IQ is 100 and you are in the 95th percentile!</h1>
          </div>
              )
    }

    finally {
        return (
            <div>
                <ErrorBoundary>
                <img src = {Score} alt = "score" id = "scorei"></img>
              <h1 class = "iq">Your IQ is 100 and you are in the 95th percentile!</h1>
              <h1 class = "iq">If you want to do the test again, just refresh the page!</h1>
                </ErrorBoundary>
              
          </div>
              )
    }

   
}


export default Step3;