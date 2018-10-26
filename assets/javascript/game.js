$(document).ready(function() {

var numbersArray = [10, 15, 7, 23];
var computerArray = [45, 37, 55, 57, 52, 44, 32, 51, 66, 65, 63, 73, 71, 74, 84, 82, 88, 114]
var randomNumber;
var yourScore = 0;
var wins = 0;
var losses = 0;

    function gameStart() {
        // Shuffle number array
        numbersArray.sort(function() {
         return 0.5 - Math.random();
        });
        console.log(numbersArray)
        
        //Create stones and assign a number to each
        for (i = 0; i < numbersArray.length; i++) {
             var newStone = $("<img>");
             newStone.addClass("stone-image");
             newStone.attr("src", "assets/images/glowingcrystal.jpg");
             newStone.attr("data-number", numbersArray[i]);
             $("#seer-stones").append(newStone);
        }
        
        //creat random game number
        var num = Math.floor(Math.random() * computerArray.length);
        randomNumber = computerArray[num];
        $("#random-number").text(randomNumber);
    }

    function reset() {
        $("#seer-stones, #score, #random-number").empty();
        randomNumber;
        yourScore = 0;
    }

    gameStart();
    // game play
    // listener for user click on images // TOTALLY IMPORTAN!! event listener is listening to empyty div
    // notice the tag.class added to dynamically created nodes after "click". listeners dont generally  
    // listen for element that were not there on Load of document.
    $("#seer-stones").on("click", "img.stone-image", function() {
        //adds up your score and prints to document
        var v = $(this).attr("data-number");
        v = parseInt(v);    
        yourScore += v;
        $("#score").text(yourScore);
     
        // checks if you lost or won
        if (yourScore === randomNumber) {
            wins++;
            $("#status").text("YOU WIN!!!")
            $("#wins").text("Wins: " + wins);
            reset()
            gameStart()
        }

        else if (yourScore >= randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            $("#status").text("YOU LOSE!!!");
            reset()
            gameStart()
        }
    });
});
