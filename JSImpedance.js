function Impedance(){ //Function the calculates parallel inductance
    
    var CapReact = prompt("What is the capacitive reactance?")
    var InductReact = prompt("What is the inductive reactance?")
    var TResist = prompt("What is the total resistance?")
    var ReactDif = 0
    var ResistSQ = 0
    var Total = 0;
    var sum = 0
    var ReactDifSQ = 0

    ResistSQ = (TResist * TResist)
    ReactDif = (InductReact - CapReact)
    ReactDifSQ = (ReactDif * ReactDif)
    sum = (ResistSQ + ReactDifSQ)
    Total = Math.sqrt(sum)

    alert("The impedance is " + Total + "ohms"); //display answer
} 