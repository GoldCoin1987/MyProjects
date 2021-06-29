function InductReact(){ //Function the calculates parallel inductance
    var TInduct = prompt("What is the total inductance?")
    var freq = prompt("What is the frequency?")
    var pi = 3.141592653
    var Total = 0;
    
    Total = (2*pi*freq*TInduct)
    
    alert("The total inductive reactance is " + Total +  "ohms"); //display answer
}