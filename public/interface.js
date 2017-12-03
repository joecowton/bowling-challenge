$(document).ready(function() {

  var game = new Game();

  function updateScore () {
    $('#points').text("Points: " + game.scoreCard)
    $('#counter').text(getCurrentBowl())
    $('#finalscore').text(avoidNan(game.score()))
  }

  $("#newGame").on('click', function() {
    $("#newGame").html(game.newGame());
    updateScore();
  })

  $("#scoreOne").on('click', function() {
    $("#scoreOne").html(game.bowl(1));
    updateScore();
  })

  $("#scoreTwo").on('click', function() {
    $("#scoreTwo").html(game.bowl(2));
    updateScore();
  })

  $("#scoreThree").on('click', function() {
    $("#scoreThree").html(game.bowl(3));
    updateScore();
  })

  $("#scoreFour").on('click', function() {
    $("#scoreFour").html(game.bowl(4));
    updateScore();
  })

  $("#scoreFive").on('click', function() {
    $("#scoreThree").html(game.bowl(5));
    updateScore();
  })

  $("#scoreSix").on('click', function() {
    $("#scoreSix").html(game.bowl(6));
    updateScore();
  })

  $("#scoreSeven").on('click', function() {
    $("#scoreSeven").html(game.bowl(7));
    updateScore();
  })

  $("#scoreEight").on('click', function() {
    $("#scoreEight").html(game.bowl(8));
    updateScore();
  })

  $("#scoreNine").on('click', function() {
    $("#scoreNine").html(game.bowl(9));
    updateScore();
  })

  $("#scoreTen").on('click', function() {
    $("#scoreTen").html(game.bowl(10));
    updateScore();
  })

  function getCurrentBowl(){
    if (game.getCurrentBowl() < 21){
      return "Frame: " + Math.floor((game.getCurrentBowl() + 1) / 2);
    }
    else {
      game.newGame();
      updateScore();
    }
  }

  function avoidNan (value){
    if (isNaN(value)){
      return "Final score: calculating.."
    }
    else {
      return "Final score:" + value;
    }
  }

});
