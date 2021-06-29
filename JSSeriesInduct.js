function SerInduct(){ //Function that calculates series inductance
    var NumSInd = prompt("How many inductors")
    var inductors = new Array(NumSInd); //create arrays and declare variables
    var reciprical = new Array(NumSInd);
    var sum = 0;
    var Total = 0;
    var l = 1;

    for (i=0;i<NumSInd;i++) { //get values to be calculated

      inductors[i] = prompt("Enter the value of L" + l);  //user input
      l++;
    }
    for (j=0;j<NumSInd;j++){  //convert values to recipricals
      reciprical[j] = (1/inductors[j]);
    }
    for (m=0;m<NumSInd;m++){  //reverse reciprical and add together, method used to avoid returning a string
      sum += (1/reciprical[m]);
    }
    Total = (sum);
    alert("The total inductance is " + Total +  "H");  //display answer
}