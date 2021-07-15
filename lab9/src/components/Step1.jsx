import React from "react";
import App from "../App";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Stopwatch from './watch.js';
import Stopwatch2 from './watch2.js';
import {useState } from "react";
import "./Step1.css"
import "./Step2.css"





function Step1 () {


    const [isStepOneActive2, setStepOneActive2] = useState(false);
    const [isStepOneActive3, setStepOneActive3] = useState(false);
    const [isStepOneActive4, setStepOneActive4] = useState(false);
    const [isStepOneActive5, setStepOneActive5] = useState(false);
    const [isStepOneActive6, setStepOneActive6] = useState(false);


    try {
        if (document.getElementById("fname").value.length === 0) {
            alert("First and Last Name cannot be empty, please enter non-empty names");

            
        }

     else {
        document.getElementById("step1").style.color = "darkred";
        document.getElementById("Introduction").style.color = "black";

    for (var i =0; i<= document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[0].remove();
    }

    for (var j =0; j< document.getElementsByTagName("input").length; j++) {
        document.getElementsByTagName("input")[0].remove();
    }

    document.getElementById("lnamel").style.display = "none";
    document.getElementById("lname").style.display = "none";

    document.getElementById("next").style.display = "none";
    
    
    

    if (document.getElementById("Introduction").innerHTML === "l' introduction") {

        document.getElementById("french").style.display = "none";
        return (
            <div>
            <h1 className = "please">Veuillez sélectionner les matières pour lesquelles vous souhaitez être testé</h1>

            <h1 className = "math">Math</h1>
            <input type = "checkbox" className = "mathc"></input>
            <label>Algèbre linéaire</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>Calcul</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>La théorie des graphes</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>Probabilités et statistiques</label>
            <br></br>

            <h1 className = "science">les sciences</h1>
            <input type = "checkbox" className = "sciencec" id = "chemistry"></input>
            <label className = "sc" >Chimie</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">La physique</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">Astrologie</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">La biologie</label>
            <br></br>


            <h1 className = "pl">Langages de programmation</h1>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">Java</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">Python</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">JavaScript</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">PHP</label>
            <br></br>


            <h1 className = "ll">Langues linguistiques</h1>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Anglaise</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Français</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Japonaise</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Italienne</label>
            <br></br>

            <h1 className = "ge">La géographie</h1>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Géographie humaine</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Géographie physique</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">géographie régionale</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Cartographie</label>
            <br></br>

            <h1 className = "hi">Histoire</h1>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Histoire politique</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Histoire de l'alimentation</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Histoire de l'art</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Histoire de la musique</label>

            <button className = "next" onClick={() => setStepOneActive3(true)}>L'étape suivante</button>
            {isStepOneActive3 && <Step2 />}

            <button className = "next2" id = "back2" onClick={() => setStepOneActive2(true)}>Retourner</button> 
            {isStepOneActive2 && <App />}
            

            <h1 className = "note">*Veuillez noter que vous ne pouvez sélectionner que des sujets dans une certaine catégorie</h1>

        </div>

            )
    }
   


    return (
        <div>
            <h1 className = "please">Please select which subjects you would like to be tested from</h1>

            <h1 className = "math">Math</h1>
            <input type = "checkbox" className = "mathc"></input>
            <label>Linear Algebra</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>Calculus</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>Graph Theory</label>
            <br></br>
            <input type = "checkbox" className = "mathc"></input>
            <label>Probability and Statistics</label>
            <br></br>

            <h1 className = "science">Sciences</h1>
            <input type = "checkbox" className = "sciencec" id = "chemistry"></input>
            <label className = "sc" >Chemistry</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">Physics</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">Astrology</label>
            <br></br>
            <input type = "checkbox" className = "sciencec"></input>
            <label className = "sc">Biology</label>
            <br></br>


            <h1 className = "pl">Programming Languages</h1>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">Java</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">Python</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">JavaScript</label>
            <br></br>
            <input type = "checkbox" className = "plc"></input>
            <label className = "pll">PHP</label>
            <br></br>


            <h1 className = "ll">Linguistic Languages</h1>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">English</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">French</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Japanese</label>
            <br></br>
            <input type = "checkbox" className = "llc"></input>
            <label className = "lll">Italian</label>
            <br></br>

            <h1 className = "ge">Geography</h1>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Human Geography</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Physical Geography</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Regional Geography</label>
            <br></br>
            <input type = "checkbox" className = "gec"></input>
            <label className = "gel">Cartography</label>
            <br></br>

            <h1 className = "hi">History</h1>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Political History</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Food History</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Art History</label>
            <br></br>
            <input type = "checkbox" className = "hic"></input>
            <label className = "hil">Music History</label>

            <button className = "next" onClick={() => setStepOneActive3(true)}>Next Step</button>
            {isStepOneActive3 && <Step2 />}

            <button className = "next2" id = "back2" onClick={() => setStepOneActive2(true)}>Go Back</button> 
            {isStepOneActive2 && <App />}
            

            <h1 className = "note">*Please note that you can only select subjects in a certain category</h1>

        </div>


        
        
    )
    }

       
            
        }

        catch (err) {

            try {
                document.getElementById("step1").style.color = "black";
            document.getElementById("step2").style.color = "darkred";
            if (document.getElementById("chemistry").checked === true) {
                alert("Choosing Chemistry as well as well as Linear Algebra is not allowed! Please only choose subjects in the same category.");
                console.log("geniusiwf");
            }

            else {

                try {

                    if (document.getElementById("Introduction").innerHTML === "l' introduction") {
                        document.getElementById("linalg").innerHTML = "Vous avez choisi l'algèbre linéaire comme sujet!";
                    }

                    else {

                        document.getElementById("french").style.display = "none";
                        return (
                            <div>
                            
                                <h1 id = "linalg">You have chosen Linear Algebra as your subject!</h1>
        
                                <button id = "start" onClick={() => setStepOneActive4(true)}>Start Test!</button>
                                {isStepOneActive4 && <Stopwatch/>}
                                <button id="back">Go Back</button>
                                {/* <Stopwatch/> */}
                        
                            </div>
                        )
                    }

                   
                }

                catch(error) {
                    return(<div>
                            
                        <h1 id = "linalg">Vous avez choisi l'algèbre linéaire comme sujet!</h1>

                        <button id = "start" onClick={() => setStepOneActive6(true)}>Commencez le test !</button>
                        {isStepOneActive6 && <Stopwatch2/>}
                        <button id="back">Retourner</button>
                        {/* <Stopwatch/> */}
                
                    </div>
                )
                    
                }
               
            }
            }

            catch (error) {

                if (document.getElementById("Introduction").innerHTML === "l' introduction") {

                    return (
                        <div>
                            
                    <Stopwatch2 id = "watch2"></Stopwatch2>
                    <br></br>
                    <br></br>
                    
                    {/* <br></br> */}
                    <h2 className = "question2">1. Pour quelle valeur de t l'ensemble des vecteurs [(1, 1, 1), (−1, 1, 2), (1, t, 7)] est-il linéairement dépendant ?</h2>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input type = "text" id = "input1"></input>
                    <br></br>

                    <h2 className = "question2">2. Supposer
(a,b,c)∥=5.
Qu'est-ce que
(−3a,−3b,−3c)∥?</h2>
<br></br>
<br></br>

<input type = "text" id = "input2"></input>
<br></br>
<br></br>
<h2 className = "question2">3. Trouver l'aire du triangle dont les sommets sont les points A = (2, 1, 0), B = (0, −3, 1) et C = (1,-2,2) ?</h2>
<input type = "text" id= "input3"></input>
<br></br>

<button id = "submit" onClick={() => setStepOneActive5(true)}>nous faire parvenir</button>
{isStepOneActive5 && <Step3/>}
                </div> 
                    )
                    
                }

                else {
                    return(

                        <div>
                            <Stopwatch/>
                            
                            <h2 className = "question"> 1. For what value of t is the set of vectors [(1, 1, 1), (−1, 1, 2), (1, t, 7)] linearly dependent ?</h2>
                            <input type = "text" className = "input"></input>
    
                            <h2 className = "question">2. Suppose 
    ∥(a,b,c)∥=5.
     What is 
    ∥(−3a,−3b,−3c)∥?</h2>
    
    <input type = "text" className = "input"></input>
    <br></br>
    <h2 className = "question">3. Find the area of the triangle whose vertices are the points A = (2, 1, 0), B = (0, −3, 1) and C = (1,-2,2)?</h2>
    <input type = "text" className = "input"></input>
    <br></br>
    
    <button id = "submit" onClick={() => setStepOneActive5(true)}>Submit</button>
    {isStepOneActive5 && <Step3/>}
                        </div> 
                        
                        )
                }

                
            }

            

            
            
        }
 
       

    
    

    }

    
    


    
    





export default Step1;