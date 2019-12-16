console.log("Welcome to tic tac toe");


var count = 1;
var user;
var userChar;

function myFunction(value) {

    // Modulus to controll user and char to user
    user = count % 2;
    
    document.getElementById(value).style.backgroundColor = "rgb(247, 149, 222)";

    console.log("Roundnumber:", count);
    console.log(user, userChar);
    console.log("Selected col with id", value);

    // Connect char to user with modulus
    if(user === 0) 
    {     
        userChar = 'X'; 
        document.getElementById(value).style.color = "rgb(78, 228, 255)";

    } else { 
        userChar = 'O'; 
        document.getElementById(value).style.color = "rgb(255, 252, 78)";
    }
        

        // Print symbol connected to user
        document.getElementById(value).innerHTML = userChar;

        count++;
  }