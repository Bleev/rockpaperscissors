// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice;
var computerChoice;
var winner;
var randomNumber = 0;
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
    var randomNumber = Math.random();
    var userChoice = $("#input").val(); 
    $("#input").html(userChoice);
    if (randomNumber <=.33) {
        $("#computerChoice").html("Rock");
        var computerChoice = "Rock";
    }
    else if (randomNumber >.33 && randomNumber <= .66) {
        $("#computerChoice").html("Paper");
    }
    else  {
        $("#computerChoice").html("Scissors");
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        alert("Computer Wins!");
    }
    else if (userChoice === "Scissors" && computerChoice === "Paper") {
        alert("Human Wins!");
    }else if (userChoice === "Scissors" && computerChoice === "Scissors") {
        alert("Tie!");
    }else if (userChoice === "Rock" && computerChoice === "Rock") {
        alert("Tie!");
    }else if (userChoice === "Rock" && computerChoice === "Paper") {
        alert("Computer Wins!");
    }else if (userChoice === "Rock" && computerChoice === "Scissors") {
        alert("Human Wins!");
    }else if (userChoice === "Paper" && computerChoice === "Rock") {
        alert("Human Wins!");
    }
    else if (userChoice === "Paper" && computerChoice === "Paper") {
        alert("Tie!");
    }
    else if (userChoice === "Paper" && computerChoice === "Scissors") {
        alert("Computer Wins!");
    }
    else {
        alert("Please capitalize your first letter only, or invalid choice!")
    }
});