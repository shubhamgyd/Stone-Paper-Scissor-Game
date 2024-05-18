const choices = ['Stone', 'Paper', 'Scissor'];
const choiceButtons = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const gameResultDisplay = document.getElementById('gameResult');
const playAgainButton = document.getElementById('playAgain');
const resultImage = document.getElementById('resultImage');

choiceButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const userChoice = event.target.innerText;
    // console.log(userChoice.target.innerText);
    const computerChoice = computer();
    const result = game(userChoice, computerChoice);
    showWinnerImage(result);


    userChoiceDisplay.textContent = `Your Choice: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer's Choice: ${computerChoice}`
    gameResultDisplay.textContent = `Result: ${displayResult(result)}`
    

    choiceButtons.forEach(btn => btn.classList.add('hidden'));
    playAgainButton.classList.remove('hidden');

  })
})

playAgainButton.addEventListener('click', () => {
  userChoiceDisplay.textContent = 'Your Choice: ';
  computerChoiceDisplay.textContent = `Computer's Choice: `;
  gameResultDisplay.textContent = 'Result: ';
  resultImage.classList.add('hidden');

  choiceButtons.forEach(btn => btn.classList.remove('hidden'));
  playAgainButton.classList.add('hidden');
})

const randomNumberGenerator = () => {
  let randomDecimal = Math.random();
  if (randomDecimal >= 0.0 && randomDecimal < 0.3333333333){
    return 0;
  } else if (randomDecimal >= 0.3333333333 && randomDecimal < 0.6666666666){
    return 1;
  } else {
    return 2;
  }
}

const computer = () => {
  const value = randomNumberGenerator();
  if (value == 0){
    return "Stone";
  } else if (value == 1){
    return "Paper";
  } else {
    return "Scissor";
  }
}

const game = (choice, choiceOfComputer) => {
  if (choice == "Stone" && choiceOfComputer == "Scissor"){
    return 1;
  } else if (choice == "Stone" && choiceOfComputer == "Stone") {
    return -1;
  } else if (choice == "Stone" && choiceOfComputer == "Paper") {
    return 0;
  } else if (choice == "Paper" && choiceOfComputer == "Stone"){
    return 1;
  } else if (choice == "Paper" && choiceOfComputer == "Scissor"){
    return 0;
  } else if (choice == "Paper" && choiceOfComputer == "Paper") {
    return -1;
  } else if (choice == "Scissor" && choiceOfComputer == "Stone") {
    return 0;
  } else if (choice == "Scissor" && choiceOfComputer == "Paper") {
    return 1;
  } else if (choice == "Scissor" && choiceOfComputer == "Scissor"){
    return -1;
  }
}

const displayResult = (value) => {
  if (value === 1){
    return `Congratulations User, you won!!`;
  } else if (value === 0){
    return `Computer won the game!!`;
  } else if (value === -1){
    return "Game is a draw!!";
  }
}

const playGame = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Select 's' or 'S' for 'Scissor'");
  console.log("Select 'p' or 'P' for 'Paper'");
  console.log("Select 'r' or 'R' for 'Rock'");
  console.log("Select 'q' or 'Q' to quit");

  rl.question("Please enter your choice: ", (userInput) => {
    let choice;
    if (userInput.toLowerCase() == 'r'){
      choice = 'Stone';
    } else if (userInput.toLowerCase() == 'p'){
      choice = 'Paper';
    } else if (userInput.toLowerCase() == 's') {
      choice = 'Scissor';
    } else if (userInput.toLowerCase() == 'q') {
      console.log("Thank you for playing!");
      rl.close();
      return;
    } else {
      console.log("Invalid choice, please try again.");
      rl.close();
      playGame(); // Restart the game on invalid input
      return;
    }

    let choiceOfComputer = computer();
    console.log(`Computer chose: ${choiceOfComputer}`);
    let result = game(choice, choiceOfComputer);
    displayResult(result);

    rl.question("Do you want to play again? (y/n): ", (playAgain) => {
      if (playAgain.toLowerCase() === 'y') {
        rl.close();
        playGame(); // Restart the game if user wants to play again
      } else {
        console.log("Thank you for playing!");
        rl.close();
      }
    });
  });
}

const showWinnerImage = (value) => {
  if (value == 1){
    
    resultImage.classList.remove('hidden');
    resultImage.querySelector('img').src = 'congratulation.jpeg'; // Replace 'winner_image.png' with the path to your image
  } else if(value === 0) {
    resultImage.querySelector('img').src = 'lose.jpeg';
    resultImage.classList.remove('hidden');
  } else if(value === -1) {
    resultImage.querySelector('img').src = 'gameDraw.jpeg';
    resultImage.classList.remove('hidden');
  }
}