
  function greeting() {   
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    alert("Hello! " + fName + " " +  mName + ". " + lName + ".");
    var entryNum = prompt("How high do you want to count, " + fName + "?");
    for (var currentEntry = 1; currentEntry <= entryNum; currentEntry++) {
        if (currentEntry % 2 == 0 ) {
        document.getElementById("count").innerHTML += currentEntry + ". " + " Drip Drop: The number is Even!" +  "<br> " + "<br>";
        document.getElementById("count").style.display ="block";
        } else {
        document.getElementById("count").innerHTML += currentEntry + ". " + " Drip Drop: The number is Odd!" +  "<br> " + "<br>";
        document.getElementById("count").style.display ="block";
        }
    }
}
  function changehead(){
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    document.getElementById("display").innerHTML = "Welcome to Shebba Mineral Fizz Buzz," +fName+" "+mName+" "+lName;
  }