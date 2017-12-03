function Game(){
  this.bowls = []
  this.currentBowl = 0;
  this.scoreCard = []
};

Game.prototype.bowl = function(pins){
  this.bowls[this.currentBowl++] = pins;
  this.scoreCard.push(" " + pins);
};

Game.prototype.newGame = function (){
  this.currentBowl = 0;
  this.bowls = [];
  this.scoreCard = [];
};

Game.prototype.getCurrentBowl = function (){
    return this.currentBowl;
};

Game.prototype.score = function () {

  var score = 0;
  var frameIndex = 0;
  var self = this;

	function _sumPins (){
	  return self.bowls[frameIndex] + self.bowls[frameIndex + 1];
	}

	function _isStrike (){
	  return self.bowls[frameIndex] === 10;
	}

	function _isSpare (){
  	return self.bowls[frameIndex] + self.bowls[frameIndex + 1] === 10;
	}

	function _strikeBonus () {
  	return self.bowls[frameIndex + 1] + self.bowls[frameIndex + 2];
	}

	function _spareBonus(){
  	return self.bowls[frameIndex + 2];
	}

  for (var frame = 0; frame < 10; frame ++){
    if (_isStrike()){
      score += 10 + _strikeBonus();
      frameIndex ++;
      console.log(frameIndex)
    }
    else if (_isSpare()) {
      score += 10 + _spareBonus();
      frameIndex += 2;
      console.log(frameIndex)
    }
    else {
      score += _sumPins();
      frameIndex += 2;
    }
  }
  console.log(frame)
  return score;

};
