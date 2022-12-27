let playerPoints = 0;
let computerPoints = 0;


const clickRock = document.querySelector('#rock');
clickRock.addEventListener('click', () => {
	playRound("rock");
});
const clickPaper = document.querySelector('#paper');
clickPaper.addEventListener('click', () => {
	playRound("paper");
});
const clickScissors = document.querySelector('#scissors');
clickScissors.addEventListener('click', () => {
	playRound("scissors");
});



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



function checkAndReset(playerScore, computerScore, speaker) {
	if (playerPoints === 5 || computerPoints === 5) {
		console.log("entrei")
		playerPoints = 0;
		playerScore.textContent = playerPoints;
		computerPoints = 0;
		computerScore.textContent = computerPoints;

		while (speaker.firstChild) {
			speaker.removeChild(speaker.lastChild);
		}
	}
}



function playRound(playerChoice) {

	const computerChoice = getComputerChoice().toLowerCase();
	const speaker = document.querySelector('#speaker');
	const speakerContent = document.createElement('div');
	const playerScore = document.querySelector('#player-score');
	const computerScore = document.querySelector('#computer-score');
	let result;

	checkAndReset(playerScore, computerScore, speaker);

	//Gives the result

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

	// Checks who won and writes the round log

	if (result === "WIN") {
		playerPoints++;
		playerScore.textContent = playerPoints;
		speakerContent.textContent = "You won the round! " + playerChoice + " beats " + computerChoice;
		speakerContent.style = "color: green";

	} else if (result === "DRAW") {
		speakerContent.textContent = "This round it's a DRAW! Both players chose " + playerChoice;

	} else if (result === "LOSE") {
		computerPoints++;
		computerScore.textContent = computerPoints;
		speakerContent.textContent = "You lost the round! " + computerChoice + " beats " + playerChoice;
		speakerContent.style = "color: red";
	}

	speaker.appendChild(speakerContent);

	// Checks if anyone won, if it's true, removes rounds logs to print a "you win" or "you lost"

	if (playerPoints === 5) {
		while (speaker.firstChild) {
			speaker.removeChild(speaker.lastChild);
		}

		speakerContent.textContent = "YOU WON!";
		speakerContent.style = "color: green";
		speaker.appendChild(speakerContent);

	} else if (computerPoints === 5) {

		while (speaker.firstChild) {
			speaker.removeChild(speaker.lastChild);
		}
		speakerContent.textContent = "YOU LOST!";
		speakerContent.style = "color: red";
		speaker.appendChild(speakerContent);
	}
}