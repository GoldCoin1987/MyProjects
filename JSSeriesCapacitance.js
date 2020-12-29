function SerCap(){
    var NumCap = prompt("How many capacitors?")
    var caps = new Array(NumCap);
    var reciprical = new Array(NumCap);
    var sum = 0;
    var Total = 0;
    var c = 1;

    for (i=0;i<NumCap;i++) {

      caps[i] = prompt("Enter the value of C" + c);
      c++;
    }
    for (j=0;j<NumCap;j++){
      reciprical[j] = (1/caps[j]);
    }
    for (l=0;l<NumCap;l++){
      sum += reciprical[l];
    }
    Total = (1/sum);
    alert("The total capacitance is " + Total +  "f");
}