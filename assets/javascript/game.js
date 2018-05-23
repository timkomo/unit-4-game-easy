var playerScore = playerScoreRandom()
var crystalOneValue = crystalRandom()
var crystalTwoValue = crystalRandom()
var crystalThreeValue = crystalRandom()
var crystalFourValue = crystalRandom()
var totalCrystalValue = 0



// Function for getting random value between 19-120 for player score.
function playerScoreRandom(min, max) {
return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

// Function for getting random value between 1-12 for crystal values.

function crystalRandom(min, max) {
return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}


console.log(parseInt(crystalOneValue) + parseInt(crystalTwoValue))



console.log(crystalOneValue);
console.log(crystalTwoValue);
console.log(crystalThreeValue);
console.log(crystalFourValue);