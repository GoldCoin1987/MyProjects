function SerResist(){ //Function that calculates series resistance
    var NumSRes = prompt("How many resistors?")
    var resistors = new Array(NumSRes); //create arrays and declare variables
    var reciprical = new Array(NumSRes);
    var sum = 0;
    var Total = 0;
    var r = 1;

    for (i=0;i<NumSRes;i++) { //get values to be calculated

      resistors[i] = prompt("Enter the value of R" + r);  //user input
      r++;
    }
    for (j=0;j<NumSRes;j++){  //convert values to recipricals
      reciprical[j] = (1/resistors[j]);
    }
    for (l=0;l<NumSRes;l++){  //reverse reciprical and add together, method used to avoid returning a string
      sum += (1/reciprical[l]);
    }
    Total = (sum);
    alert("The total resistance is " + Total +  "Ω");  //display answer
}