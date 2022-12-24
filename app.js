let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {

	let computerChoice = (Math.floor(Math.random() * (3 - 1 + 1) + 1));

	switch (computerChoice) {
	case 1:
		return ("Rock");
	case 2:
		return ("Paper");
	case 3:
		return ("Scissors");
	}
}

function playRound() {

	const playerChoice = prompt("Choose your option between (Rock, Paper or Scissors):").toLowerCase();

	const computerChoice = getComputerChoice().toLowerCase();
	let result;

	switch (playerChoice){
		case "rock":
			if(computerChoice == "rock"){
				result = "DRAW";
			} else if (computerChoice == "scissors") {
				result = "WIN";
			} else if (computerChoice == "paper") {
				result = "LOSE";
			}
			break;
		case "paper":
			if(computerChoice == "rock"){
				result = "WIN";
			} else if (computerChoice == "scissors") {
				result = "LOSE";
			} else if (computerChoice == "paper") {
				result = "DRAW";
			}
			break;
		case "scissors":
			if(computerChoice == "rock"){
				result = "LOSE";
			} else if (computerChoice == "scissors") {
				result = "DRAW";
			} else if (computerChoice == "paper") {
				result = "WIN";
			}
			break;
	}

	if (result === "WIN") {
		playerPoints++;
		return("You won the round! " + playerChoice + " beats " + computerChoice);
	} else if (result === "DRAW") {
		return("This round it's a DRAW! Both players chose " + playerChoice);
	} else if (result === "LOSE") {
		computerPoints++;
		return("You lost the round! " + computerChoice + " beats " + playerChoice);
	}
}

function game() {
	for(i = 1; i <= 5; i++){
		console.log(playRound());
		console.log("Player points: " + playerPoints);
		console.log("Computer points: " + computerPoints);
	}

	if (playerPoints > computerPoints){
		console.log("YOU WON THE GAME! " + playerPoints + " to " + computerPoints);
	} else if (playerPoints < computerPoints) {
		console.log("YOU LOST GAME! " + playerPoints + " to " + computerPoints);
	} else {
		console.log("It's a DRAW! " + playerPoints + " to " + computerPoints)
	}
}