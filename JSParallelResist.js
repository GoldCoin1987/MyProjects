function ParaResist(){ //Function the calculates parallel resistance
    var NumPRes = prompt("How many resistors?")
    var resistors = new Array(NumPRes); //create arrays and declare variables
    var reciprical = new Array(NumPRes);
    var sum = 0;
    var Total = 0;
    var r = 1;

    for (i=0;i<NumPRes;i++) { //get values to be calculated

      resistors[i] = prompt("Enter the value of R" + r); //user input
      r++;
    }
    for (j=0;j<NumPRes;j++){  //convert values to recipricals
      reciprical[j] = (1/resistors[j]);
    }
    for (l=0;l<NumPRes;l++){  //add all values together
      sum += reciprical[l];
    }
    Total = (1/sum);  //take the reciprical of sum
    alert("The total resistance is " + Total +  "Ω"); //display answer
}