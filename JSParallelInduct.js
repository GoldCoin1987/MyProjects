function ParaInduct(){ //Function the calculates parallel inductance
    var NumPInd = prompt("How many inductors?")
    var inductors = new Array(NumPInd); //create arrays and declare variables
    var reciprical = new Array(NumPInd);
    var sum = 0;
    var Total = 0;
    var l = 1;

    for (i=0;i<NumPInd;i++) { //get values to be calculated

      inductors[i] = prompt("Enter the value of L" + l); //user input
      l++;
    }
    for (j=0;j<NumPInd;j++){  //convert values to recipricals
      reciprical[j] = (1/inductors[j]);
    }
    for (u=0;u<NumPInd;u++){  //add all values together
      sum += reciprical[u];
    }
    Total = (1/sum);  //take the reciprical of sum
    alert("The total inductance is " + Total +  "H"); //display answer
}