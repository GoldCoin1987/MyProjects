function CapReact(){ //Function the calculates parallel inductance
    
    var TCap = prompt("What is the total capacitance?")
    var freq = prompt("What is the frequency?")
    var pi = 3.1415
    var sum = 0
    var Total = 0;
 
    sum = (2*pi*freq*TCap)
    Total = (1/sum)

    alert("The total inductive reactance is " + Total + "ohms"); //display answer
} 