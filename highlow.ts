function makeGuess() {
    // ask the user to make a guess
    let guess = Number(prompt("Guess a number: "));
    return guess;
}

function checkGuess(guess: number, answer: number) {
    console.log(`guess = ${guess}`);
    console.log(`answer = ${answer}`);
    if (guess < answer) {
        console.log("Too Low.");
    } else if (guess > answer) {
        console.log("Too High.");
    } else {
        console.log("You Guessed It!");
    }
}

function generateAnswer() {
    // generate a random number between 1 and 10
    let answer = Math.floor(Math.random() * 10 + 1);
    console.log(answer);
    return answer;
}

function playHighLow() {
    let answer = generateAnswer();
    let guess = makeGuess();
    checkGuess(guess, answer);
}

playHighLow();