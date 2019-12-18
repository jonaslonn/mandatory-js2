console.log("Welcome to tic tac toe");

var count = 0; // Håller koll på vilken runda det är i spelet
var max = 9; // Ant Max rundor
var user; // Tillsammans med count och modulus så får man här två unika spelare.
var userChar; // Kopplar till X eller Y till user
var moves = []; // Array för att lagra data för de olika rutorna.

var x = 0; // Lagrar antalet vinster för X
var o = 0; // Lagrar antalet vinster för O



function play(value) {
    
    user = count % 2; // Modulus to controll user and char to user
    
    // Bryter spelet vid max antal slag / avslutat spel    
    if(count === max)
    {
        // alert("Spelet har avslutats.");
        modal('<span style=\"color:Red;\">The Game has ended!</span>');
    }
    else {

            document.getElementById(value).style.backgroundColor = "rgb(247, 149, 222)";

            // Skriver ut användbar info till konsollen.
            console.log("Roundnumber:", count);
            console.log("Selected col with id", value);

                // Kontrollerar vald ruta/array för att inte spela på samma.
                if(moves[value] == null)
                {        
                    // Tilldela X eller O till varannan användare med hjälp utav modulus.
                    if(user === 0) 
                    {     
                        userChar = 'X'; 
                        document.getElementById(value).style.color = "rgb(78, 228, 255)";

                    } else { 
                        userChar = 'O'; 
                        document.getElementById(value).style.color = "rgb(255, 252, 78)";
                    }

                    document.getElementById(value).innerHTML = userChar; // Skriver ut symbol för användaren.       
                    moves[value] = userChar; // Tilldela värdet i en array med värder/ID ifrån kolumnen
                    count++; // Plussar på räknaren för att kontrollera om spelet är slut

                    gameResult(userChar, user); // Kontrollerar restultatet
                }
                else {
                    //alert("Någon har redan spelat på denna rutan"); // Om arrayn har ett värde, varna spelaren om att det är upptaget.
                    modal('<span style=\"color:Red;\">This square has already been taken!</span>');
                }     
        }  
}


  
  // Funktion för att kontrollera vinst.
  function gameResult(userChar, user) {
      if(
        moves[0] === userChar && moves[1]  === userChar && moves[2]  === userChar || 
        moves[3] === userChar && moves[4]  === userChar && moves[5]  ===userChar || 
        moves[6] === userChar && moves[7]  === userChar && moves[8]  === userChar || 
        
        // Lodrätt svar X
        moves[0] === userChar && moves[3]  === userChar && moves[6]  === userChar || 
        moves[1] === userChar && moves[4]  === userChar && moves[7]  === userChar || 
        moves[2] === userChar && moves[5]  === userChar && moves[8]  === userChar || 

        // Diagonala svar
        moves[0] === userChar && moves[4]  === userChar && moves[8]  === userChar || 
        moves[2] === userChar && moves[4]  === userChar && moves[6]  === userChar
      )
      {
        count = max; // Sätter count till max för att spelet ska avslutas
        // alert("And the Winner is: " + userChar);
        modal('<span style=\"color:Green;\">And the Winner is:</span> ' + userChar);

        // Lägger till en vinst för användaren som vann.   
          if(user === 0) 
          {     
            x++;
            console.log('Win for X with the new results: ' + x);
            document.getElementById('x').innerHTML = x + ' Wins';      
          } else { 

            console.log('Win for O with the new results: ' + o);
            o++;
            document.getElementById('o').innerHTML = o + ' Wins';
          }        
      }
    }




    // Funktion för att Resetta spelet
    function resetGame() {

        count = 0;
        for(i = 0; i <= max; i++)
        {
            if(moves[i] === 'X' || moves[i] === 'O')
            {                
            document.getElementById(i).innerHTML = null;
            document.getElementById(i).style.backgroundColor = '#E7E7E7';
            moves[i] = null;     
            }
        }
        
      }



      function modal(message) {
      var modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


modal.style.display = "block";
document.getElementById('message').innerHTML = message;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
      }