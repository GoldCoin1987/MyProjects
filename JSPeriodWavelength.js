function Wave(){     //Fuction that calculates wavelength from period
    var waveLength = prompt("What is the Period?");
    var reciprical = (1/waveLength);
    alert("The wavelength is " + reciprical + " meters")

}

function Period(){   //Function that calculates period from wavelength
    var Per = prompt("What is the wavelength?");
    var reciprical = (1/Per);
    alert("The Period is " + reciprical + " seconds")

}