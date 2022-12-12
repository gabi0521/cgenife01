function greeting() {  
    var values = ""; 
    //var fName = document.getElementById("fName").value;
    //var mName = document.getElementById("mName").value;
    //var lName = document.getElementById("lName").value;
   // document.getElementById("display").innerHTML = fName +" "+ mName+" "+lName + " Welcome to Sheeba Mineral Fizz Buzz 4";
    var firstDigit = document.getElementById("qNum1").value;
    var secondDigit = document.getElementById("qNum2").value;
    var thirdDigit = document.getElementById("qNum3").value;

    var firstDigitValue = document.getElementById("qName1").value;
    var secondDigitValue = document.getElementById("qName2").value;
    var thirdDigitValue = document.getElementById("qName3").value;

    var numList = document.getElementById("nums").value;
    var defaults = document.getElementById("default").value;
    for (var i = 1; i <= numList; i++) { 
        /*values += i.toString();*/
        if (i % firstDigit === 0 && i % secondDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". " + " " + firstDigitValue + " " + secondDigitValue + " " + thirdDigitValue + "<br>";
           
        }    
        else if (i % firstDigit === 0 && i % secondDigit === 0) 
        {            values += i +". "  + firstDigitValue + " " + secondDigitValue +  "<br>";
            
        }
        else if (i % firstDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". " + firstDigitValue + " " + thirdDigitValue + "<br>";
            
        }
        else if (i % secondDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". " + secondDigitValue + " " + thirdDigitValue + "<br>";
            
        }
        else if (i % firstDigit === 0 ) 
        {
            values += i +". "+ firstDigitValue+ "<br>";
           
        }
        else if (i % secondDigit === 0 ) 
        {
            values += i +". "+ secondDigitValue + "<br>";
           
        }
        else if (i % thirdDigit === 0) 
        {
            values += i +". "+  thirdDigitValue +"<br>";
           
        }
        else 
        {
            values += i +". "+ defaults + "<br>";
           
        }  
        
        values += "<br>";
    }

    document.getElementById("divNums").innerHTML = values;   
    document.getElementById("divNums").style.display = "block"; 
}            


function shifthead() {
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;
}