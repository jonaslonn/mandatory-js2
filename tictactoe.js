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
    
    document.getElementById(value).style.backgroundColor = "rgb(247, 149, 222)";

    // Skriver ut användbar info till konsollen.
    console.log("Roundnumber:", count);
    console.log("Selected col with id", value);


    //
    // Tilldela X eller O till varannan användare med hjälp utav modulus.
    //
    if(user === 0) 
    {     
        userChar = 'X'; 
        document.getElementById(value).style.color = "rgb(78, 228, 255)";

    } else { 
        userChar = 'O'; 
        document.getElementById(value).style.color = "rgb(255, 252, 78)";
    }

        //
        // Kontrollerar vald ruta/array för att inte spela på samma.
        //
        if(moves[value] == null)
        {        
        document.getElementById(value).innerHTML = userChar; // Skriver ut symbol för användaren.       
        moves[value] = userChar; // Tilldela värdet i en array med värder/ID ifrån kolumnen
        count++; // Plussar på räknaren för att kontrollera om spelet är slut
        }
        else {
            alert("Någon har redan spelat på denna rutan"); // Om arrayn har ett värde, varna spelaren om att det är upptaget.
        }

        gameResult(userChar, user);




        // Bryter spelet vid max antal slag.
        // Lägger annars till en runda för kontroll utav maxrundor.
        if(count === max)
        {
            alert("Max antal rundor spelade");
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

        alert("Winner " + userChar);

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