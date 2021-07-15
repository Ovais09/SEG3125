
import './App.css';
import React from "react";
import brain from "./website_images/brain.jpg";
import Step1 from "./components/Step1.jsx"
import {useState } from "react";

function french () {
  document.getElementsByClassName("welcome")[0].innerHTML = "Bienvenue sur le site Web d'IQ Miner";

  document.getElementById("french").style.display = "none";

  document.getElementById("Introduction").innerHTML = "l' introduction";
  document.getElementById("step1").innerHTML = "étape 1";
  document.getElementById("step2").innerHTML = "étape 2";
  document.getElementById("step3").innerHTML = "étape 3";

  document.getElementById("a").innerHTML = "Ce site Web déterminera le QI d'une personne dans un sujet donné que l'utilisateur choisira. Ce site déterminera également dans quel centile se trouve l'utilisateur en fonction de son QI calculé. Une fois que l'utilisateur a sélectionné le sujet sur lequel il souhaite être testé, <br></br>une minuterie apparaîtra et l'utilisateur doit essayer de répondre à autant de questions que possible dans le temps limite.";
  document.getElementById("fnamel").innerHTML = "Entrez votre prénom:";
  document.getElementById("lnamel").innerHTML = "Saisissez votre nom de famille :";

  document.getElementById("next").innerHTML = "L'étape suivante";

  document.getElementById("in").innerHTML = "Afin de commencer à calculer votre QI, nous avons besoin de vos informations personnelles. Ces informations nous aideront à déterminer les types de personnes qui utilisent notre site.";
  
}

function App() {

  const [isStepOneActive, setStepOneActive] = useState(false);

  return (
    <div className="App">
      <div>
        <h1 className = "welcome">Welcome to the IQ Miner Website</h1>
        <img src = {brain} alt = "brain" width = "100%" height = "200px"></img>
        <div className = "rectangle">
          <h2 className = "Introduction" id = "Introduction">Introduction</h2>
          <h2 className = "step1" id = "step1">Step 1</h2>
          <h2 className = "step2" id = "step2">Step 2</h2>
          <h2 className = "step3" id = "step3">Step 3</h2>
        </div>

       <div className = "body">

         <br></br>

         <button id="french" onClick = {french}>Convert Website to French</button>

         <br></br>
         <br></br>

        <p id="a">This website will determine a person's IQ in a given subject that the user will choose. <br></br> This site will also determine which percentile the user is in based on their calculated IQ. <br></br>Once the user has selected which subject they would like to be tested on, <br></br>a timer will appear and the user has to try and answer as many questions as they can within the time limit.</p>
        <br></br>
        <p id = "in">In order to get started calculating your IQ, we need your personal information. <br></br>This information will help us determine the types of people that are using our site. </p>

        <br></br>
        <p id = "fnamel">Enter your first name: </p>
        <input className = "name" type="text" id = "fname"></input>

        <br></br>
        <p id="lnamel">Enter your last name: </p>
        <input type="text" className = "name" id="lname" ></input>

        <br></br>

        <br></br>

    

      <button className = "next1" id = "next" onClick={() => setStepOneActive(true)} >Next Step</button>
      {isStepOneActive && <Step1 />}

       </div>

      </div>
      
      
      
    </div>
  );
}

export default App;
