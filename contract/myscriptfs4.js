function greeting() {   
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    alert("Hello! " + fName + " " +  mName + ". " + lName + ".");
    var firstDigit= parseInt(prompt("Please enter the first number? "));
    var secondDigit = parseInt(prompt("Please enter the second number? "));
    var thirdDigit = parseInt(prompt("Please enter the third number? "));
    var values = "";
    var numList = 125;
    for (var i = 1; i <= numList; i++) { 
        /*values += i.toString();*/
        if (i % firstDigit === 0 && i % secondDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". " + " HydrateDropWater";
           
        }    
        else if (i % firstDigit === 0 && i % secondDigit === 0) 
        {
            values += i +". "+ " HydrateDrop<br>";
            
        }
        else if (i % firstDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". "+ " HydrateWater<br>";
            
        }
        else if (i % secondDigit === 0 && i % thirdDigit === 0) 
        {
            values += i +". "+ " DropWater<br>";
            
        }
        else if (i % firstDigit === 0 ) 
        {
            values += i +". "+ " Hydrate<br>";
           
        }
        else if (i % secondDigit === 0 ) 
        {
            values += i +". "+ " Drop<br>";
           
        }
        else if (i % thirdDigit === 0) 
        {
            values += i +". "+ " Water<br>";
           
        }
        else 
        {
            values += i +". "+ "<br>";
           
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