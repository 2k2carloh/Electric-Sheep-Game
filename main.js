let originalTextGame = ['Keyboard', 'Mouse', 'GPU', 'Ram', 'I love u <3', 'Bingo', 'Bustamante', 'Chicken Little', 'Lluvia', 'Dinosaurio', 'Loros'];
let textGame = [...originalTextGame];
let randomLenghtText = Math.floor(Math.random() * textGame.length);
let newWordGame = [];
let wordCorrect = [];

let correctWord;
let score = 0;

function printWord() {

    newWordGame = [];

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * textGame.length);

        newWordGame.push(textGame[randomNumber]);

        let indexRemove = textGame.indexOf(textGame[randomNumber]);

        if (indexRemove !== -1) {
            textGame.splice(indexRemove, 1)
        }
    }

    document.getElementById('word-help').innerHTML = newWordGame.join(' - ');

    let randomNumberWord = Math.floor(Math.random() * newWordGame.length);
    correctWord = newWordGame[randomNumberWord];

    return correctWord;
}

printWord();

let nextLevel = true;

document.getElementById('score').innerHTML = 'Score: ' + score;

function view() {

    document.getElementById('screen').innerHTML = 'Correct word is: ' + correctWord
        document.getElementById('screen').innerHTML = 'Correct word is: ' + correctWord;
        let userInput = document.getElementById('text-user').value;
        if (userInput == correctWord) {
            document.getElementById('message-word').classList.add('green')
            document.getElementById('message-word').innerHTML = 'Congrats! word correct'
            wordCorrect.push(correctWord)
            score++;
            document.getElementById('score').innerHTML = 'Score: ' + score;

            textGame = [...originalTextGame]; 

            document.getElementById('text-user').value = '';
            printWord();
        } else {
            document.getElementById('message-word').classList.add('red')
            document.getElementById('message-word').innerHTML = 'Sorry :(, your word is incorrect'
            nextLevel = false;
            
            document.getElementById('table-word').innerHTML = wordCorrect.join(' <span style="color: #000; padding: 1px 200px; border-bottom: 2px solid black; display: block;"></span> ');

            document.getElementById('container').style.display = 'none';
            document.getElementById('table-word-correct').style.display = 'flex';

        }

}
