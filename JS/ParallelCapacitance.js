function ParaCap(){
    var NumPCap = prompt("How many capacitors?")
    var caps = new Array(NumPCap);
    var reciprical = new Array(NumPCap);
    var sum = 0;
    var Total = 0;
    var r = 1;

    for (i=0;i<NumPCap;i++) {

      caps[i] = prompt("Enter the value of C" + r);
      r++;
    }
    for (j=0;j<NumPCap;j++){
      reciprical[j] = (1/caps[j]);
    }
    for (l=0;l<NumPCap;l++){
      sum += (1/reciprical[l]);
    }
    Total = (sum);
    alert("The total capacitance is " + Total +  "f");
}