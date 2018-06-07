$(document).ready(function() {

    //global variables
    var computerNumber = Math.floor(Math.random() * 102 + 19);
    var totalNumber = 0;
    var wins = 0;
    var losses = 0;
    //pushing computer number into html
    $("#random-num").html("<p>Match This Number!</p>" +computerNumber);

    var ruby = Math.floor(Math.random() * 12 + 1);
    var diamond = Math.floor(Math.random() * 12 + 1);
    var emerald = Math.floor(Math.random() * 12 + 1);
    var sapphire = Math.floor(Math.random() * 12 + 1);
    $('#ruby').attr('value', ruby);
    $('#diamond').attr('value', diamond);
    $('#emerald').attr('value', emerald);
    $('#sapphire').attr('value', sapphire);

    $("#results").html("<p>Wins:</p>" + wins + "<p>Losses:</p>" + losses);
    
    function reset() {
        //reset variables
        computerNumber = Math.floor(Math.random() * 102 + 9);
        $("#random-num").html("<p>Match This Number!</p>" +computerNumber);
        ruby = Math.floor(Math.random() * 12 + 1);
        diamond = Math.floor(Math.random() * 12 + 1);
        emerald = Math.floor(Math.random() * 12 + 1);
        sapphire = Math.floor(Math.random() * 12 + 1);
        totalNumber = 0;
        $("#totalscore").html(totalNumber);
        
      }
    // When a gem is clicked the number from it's mathrandom is added to the totalNumber
    // totalNumber is displayed on the html document 
    $(".gem").click(function(){
    var crystalValue = ($(this).attr('value'));
    crystalValue = parseInt(crystalValue);
    totalNumber += crystalValue;
    $("#totalscore").html(totalNumber);

    if (totalNumber === computerNumber) {
        wins++;
        alert ("You Win!");
        reset();
        $("#results").html("<p>Wins:</p>" + wins + "<p>Losses:</p>" + losses);
    }
    else if (totalNumber > computerNumber) {
        losses++;
        alert("You Lose!");
        reset();
        $("#results").html("<p>Wins:</p>" + wins + "<p>Losses:</p>" + losses);
    }
    

    
    })
});
