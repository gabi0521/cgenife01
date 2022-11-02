"use strict";

function changehead(){
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;
   
let myPrints = "";	
 for (var i = 1; i <= 140; i++) {
    myPrints += i.toString();
      if (i % 3 != 0 && i % 5 != 0) {
        myPrints += ". " + " Drip";
     }
     else {
        if (i % 3 == 0) {
           myPrints += ". " + " Water";
        }
        if (i % 5 == 0) {
           myPrints += ". " + "Drop";
        }
        
     }
         myPrints += "<br>";
     
    }
     document.getElementById("myWord").innerHTML = myPrints;
     document.getElementById("myWord").style.display = "block";
    }    
