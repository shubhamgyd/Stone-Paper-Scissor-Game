const readline = require('readline');

const randomNumberGenerator = () => {
  let randomDecimal = Math.random();
  if (randomDecimal >= 0.0 && randomDecimal < 0.3333333333){
    return 0;
  } else if (randomDecimal >= 0.3333333333 && randomDecimal < 0.6666666666){
    return 1;
  } else {
    return 2;
  }
  console.log(randomDecimal);
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
    console.log("*******************************")
    console.log(`Congratulations User you won!!`);
    console.log("*******************************")
  } else if (value === 0){
    console.log("*******************************")
    console.log(`Computer won the game!!`);
    console.log("*******************************")
  } else {
    console.log("*******************************")
    console.log("Game is draw!!")
    console.log("*******************************")
  }
}

// var flag = true;
// while (flag === true) {
const playGame = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Select 's' or 'S' for 'Scissor'");
  console.log("Select 'p' or 'P' for 'Paper'");
  console.log("Select 'r' or 'R' for 'Rock'");
  rl.question("Please enter your choice: ", (answer) => {
    let choice;
    if (answer.toLowerCase() == 'r'){
      choice = 'Stone';
    } else if (answer.toLowerCase() == 'p'){
      choice = 'Paper';
    } else if (answer.toLowerCase() == 's') {
      choice = 'Scissor';
    } else {
      rl.close();
      playGame();
    }

    let choiceOfComputer = computer();
    console.log(`Computer chose: ${choiceOfComputer}`);
    let result = game(choice, choiceOfComputer);
    displayResult(result);

    rl.question("Do you want to play again? (y/n): ", (playAgain) => {
      if (playAgain.toLowerCase() == 'y') {
        rl.close();
        playGame();
      } else {
        console.log("Thank you for playing!");
        rl.close();
      }
    })
  })
}

playGame();