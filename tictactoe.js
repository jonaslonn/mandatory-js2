console.log("Welcome to tic tac toe");


var count = 0; // Håller koll på vilken runda det är i spelet
var max = 9; // Ant Max rundor
var user;
var userChar;
var moves = [];

function myFunction(value) {

    // Modulus to controll user and char to user
    user = count % 2;
    
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






    // Loopa arrayn för kontrollera värden
    // for(i = count; i <= max; i++)
    // {
    //     console.log("ID:", moves[i], i);
    // }




    if(
        // Vågrätt svar X
        moves[0] === 'X' && moves[1]  === 'X' && moves[2]  === 'X' || 
        moves[3] === 'X' && moves[4]  === 'X' && moves[5]  === 'X' || 
        moves[6] === 'X' && moves[7]  === 'X' && moves[8]  === 'X' || 
        
        // Lodrätt svar X
        moves[0] === 'X' && moves[3]  === 'X' && moves[6]  === 'X' || 
        moves[1] === 'X' && moves[4]  === 'X' && moves[7]  === 'X' || 
        moves[2] === 'X' && moves[5]  === 'X' && moves[8]  === 'X' || 

        // Diagonala svar
        moves[0] === 'X' && moves[4]  === 'X' && moves[8]  === 'X' || 
        moves[2] === 'X' && moves[4]  === 'X' && moves[6]  === 'X' ||

                // Vågrätt svar O
                moves[0] === 'O' && moves[1]  === 'O' && moves[2]  === 'O' || 
                moves[3] === 'O' && moves[4]  === 'O' && moves[5]  === 'O' || 
                moves[6] === 'O' && moves[7]  === 'O' && moves[8]  === 'O' || 
                
                // Lodrätt svar X
                moves[0] === 'O' && moves[3]  === 'O' && moves[6]  === 'O' || 
                moves[1] === 'O' && moves[4]  === 'O' && moves[7]  === 'O' || 
                moves[2] === 'O' && moves[5]  === 'O' && moves[8]  === 'O' || 
        
                // Diagonala svar
                moves[0] === 'O' && moves[4]  === 'O' && moves[8]  === 'O' || 
                moves[2] === 'O' && moves[4]  === 'O' && moves[6]  === 'O'
    ) 
    {
        alert("Win");
    }
        



        // Bryter spelet vid max antal slag.
        // Lägger annars till en runda för kontroll utav maxrundor.
        if(count === max)
        {
            alert("Max antal rundor spelade");
        }
        
  }