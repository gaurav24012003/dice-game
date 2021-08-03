
// to enter two name and creat frist letter capital and rest to lower case 
var p1 = prompt("Enter frist player name");
var p1_1 = p1.slice(0,1).toUpperCase();
var p1_2 = p1.slice(1,p1.lenght).toLowerCase();
var player1 = p1_1 + p1_2;

var p2 = prompt("Enter second player name");
var p2_1 = p2.slice(0,1).toUpperCase();
var p2_2 = p2.slice(1,p2.lenght).toLowerCase();
var player2 = p2_1 + p2_2;
// name part over

// adding event listner to button for click to begin the  game
document.querySelector(".button").addEventListener("click",diceGame);
// end of event listner

//creating funcion for game
 function diceGame(){
    //  for frist player
    document.querySelector(".p1").innerHTML= player1;               //changing name of player 1 as per inputed
    var randomNumber1 = Math.floor(Math.random()*6) + 1;            //creating random number for frist img
    var randomImg1 = "images/dice" + randomNumber1 + ".png";        //creating src for image
    document.querySelector(".img1").setAttribute("src",randomImg1); //changing src attribute of image to change img of dice
    // end of frisst player
     
    // for second player
    document.querySelector(".p2").innerHTML= player2;                //changing name of player 1 as per inputed
    var randomNumber2 = Math.floor(Math.random()*6) + 1;             //creating random number for frist img
    var randomImg2 = "images/dice" + randomNumber2 + ".png";         //creating src for image  
    document.querySelector(".img2").setAttribute("src",randomImg2); //changing src attribute of image to change img of dice
    // end of second player

    if(randomNumber1 > randomNumber2)
    {
     document.querySelector("h1").innerHTML = player1 + " wins🚩";
    }
    else
    {
       if(randomNumber1 <  randomNumber2)
       { 
          document.querySelector("h1").innerHTML = "🚩 " + player2 + " wins";
       }  
       else 
       {
        document.querySelector("h1").innerHTML = "Draw!";  
       }
    }     
    
}
//eng of function
