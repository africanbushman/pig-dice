var dice1;
var dice2;
var score = 0;
var dice;
var turn;
var player1;
var player2;

function rollDice()
{
var dice1=Math.floor(Math.random()*6)+1;
var dice2=Math.floor(Math.random()*6)+1;
var diceRoll =document.getElementById('diceRoll').innerHTML = dice1 + "<br/>" + dice2 + "<br/>";

//turns
turn = player1 || player2;
switch (turn) {
case player1:
if (document.getElementById("roll").onclick == true) {
turn = player2;
}
else {
turn = player1;
}
break;
case player2:
if (document.getElementById("roll").onclick == true) {
turn = player1;
}
else {
turn = player 2;
}
break;
default:
turn = player1;
}
}
var player1=document.getElement.ById("player1Score").innerHTML = player1;
var player2=document.getElementById("player2Score".innerHTML = player2;)

turn = score;

//Rules for the game
if (dice1 == 6 || dice2 == 6)
{
score += 6;
}
if (dice1 == dice2)
{
score += 12;
}
if (dice1 ==6 & dice2 == 6)
{
score += 6;
}
if (score > 99)
{
alert("you rolled a " + dice1 + " and " + dice2 + ". Your score is " + score + ". Congradulations you won!!!");
score = 0
}
else
{
alert("you rolled a " + dice1 + " and " + dice2 + ". Your score is " + score + ".");
}
}
 
