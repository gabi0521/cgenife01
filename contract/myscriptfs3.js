"use strict";

function changehead(){
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;

    
   /* let numLists = 140;*/
    
    var ptag = document.getElementById("nums");
    let valueNum = "";	
 for (var i = 1; i <= 140; i++) {
    
    var listparagraph = document.createElement('p');
    
      if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
        
        valueNum = i.toString() + ". " + " HydrateDropWater";
        listparagraph.innerText = valueNum;
        listparagraph.style.color ="white";
        ptag.appendChild(listparagraph);
        }
     else if (i % 3 === 0 && i % 5 === 0) {
            
            valueNum = i.toString() + ". " + " HydrateDrop";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
     else if (i % 3 === 0 && i % 7 === 0) {

            valueNum = i.toString() + ". " + " HydrateWater";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 5 === 0 && i % 7 === 0) {
           
            valueNum = i.toString() + ". " + " DropWater";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 3 === 0 ) {
            
            valueNum = i.toString() + ". " + "  Hydrate";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 5 === 0 ) {
            
            valueNum = i.toString() + ". " + " Drop";
            listparagraph.innerText = valueNum;
            listparagraph.style.color ="white";
            ptag.appendChild(listparagraph);
        }
    else if (i % 7 === 0) {
        
        valueNum = i.toString() + ". " + " Water";
        listparagraph.innerText = valueNum;
        listparagraph.style.color ="white";
        ptag.appendChild(listparagraph);
        
        }
    else {
       
        valueNum = i.toString() + ". " + " Drip";
        listparagraph.innerText = valueNum;
        
        ptag.appendChild(listparagraph); 
         
    }

 
}    
    
}       
