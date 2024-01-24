let randomNumber = Math.floor(Math.random() * 50) + 1;
let count = 0;

function GuessNumber() {
    const guessedNumber = parseInt(document.getElementById("num").value, 10);
    let result = document.getElementById("result");

    if (guessedNumber === randomNumber) {
        result.textContent = `You guessed it correct after ${count} attempts`;
        randomNumber = Math.floor(Math.random() * 50) + 1;
        count = 0;
    } else if (guessedNumber-randomNumber >= 15) {
        count++;
        result.textContent = "Guessed Number is too high";
    } else if (guessedNumber-randomNumber >= 5 ) {
        count++;
        result.textContent = "Guessed Number is high";
    } else if (guessedNumber-randomNumber <= -5) {
        count++;
        result.textContent = "Guessed Number is low";
    }else if (guessedNumber-randomNumber <= -15) {
        count++;
        result.textContent = "Guessed Number is too low";
    }  else {
        count++;
        result.textContent = "Guessed Number is too close";
    }
}

