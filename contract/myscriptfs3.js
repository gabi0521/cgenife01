"use strict";

function changehead(){
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;

    
   /* let numLists = 140;*/

    let valueNum = "";	
 for (var i = 1; i <= 140; i++) {
    valueNum += i.toString();
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        valueNum += ". " + " HydrateDropWater";
        }
     else 
        if (i % 3 === 0 && i % 5 === 0) {
            valueNum += ". " + " HydrateDrop";
        }
     else 
        if (i % 3 === 0 && i % 7 === 0) {
            valueNum += ". " + " HydrateWater";
        }
    else 
        if (i % 5 === 0 && i % 7 === 0) {
            valueNum += ". " + " DropWater";
        }
    else 
        if (i % 3 === 0 ) {
            valueNum += ". " + " Hydrate";
        }
    else 
        if (i % 5 === 0 ) {
            valueNum += ". " + " Drop";
         }
    else 
       if (i % 7 === 0) {
        valueNum+= ". "+ " Water"; 
        }
    else {
        valueNum +=  ". "+ "Drip ";
        
              
         
    }

    
    valueNum += "<br>";
 
}    
     document.getElementById("nums").innerHTML = valueNum;
     document.getElementById("nums").style.display = "block";
}       




