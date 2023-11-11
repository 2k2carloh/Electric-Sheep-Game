let originalTextGame = [
    'Keyboard', 
    'Mouse', 
    'GPU', 
    'Ram', 
    'I love u <3', 
    'Bingo', 
    'Bustamante', 
    'Chicken Little', 
    'Lluvia', 
    'Dinosaurio', 
    'Loros'
];

let originTextDesc = [
    "It's something you use to write",
    "It's something you use to move around the screen",
    "It's something you use to play videogames",
    "It's something you use to save data",
    "It's something you say when you love someone",
    "It's a game",
    "It's a park",
    "It's a movie",
    "It's something that falls from the sky",
    "It's a big animal",
    "It's a bird"
]

let textGame = [...originalTextGame];
let textDesc = [...originTextDesc];
let randomLenghtText = Math.floor(Math.random() * textGame.length);
let newWordGame = [];
let newWordDesc = [];
let wordCorrect = [];
let helpWord;

let correctWord;
let score = 0;

function printWord() {

    newWordGame = [];
    newWordDesc = [];

    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * textGame.length);

        newWordGame.push(textGame[randomNumber]);
        newWordDesc.push(textDesc[randomNumber]);

        let indexRemove = textGame.indexOf(textGame[randomNumber]);
        let indexRemoveDect = textDesc.indexOf(textDesc[randomNumber]);

        if (indexRemove !== -1) {
            textGame.splice(indexRemove, 1)
        }

        if (indexRemoveDect !== -1) {
            textDesc.splice(indexRemoveDect, 1)
        }
    }

    document.getElementById('word-help').innerHTML = newWordGame.join(' - ');

    let randomNumberWord = Math.floor(Math.random() * newWordGame.length);
    correctWord = newWordGame[randomNumberWord];
    helpWord = newWordDesc[randomNumberWord];

    document.getElementById('help-word').innerHTML = helpWord;

    return correctWord;
}

printWord();

function startGame() {

    document.getElementById('score').innerHTML = 'Score: ' + score;
    textGame = [...originalTextGame];
    textDesc = [...originTextDesc];

    document.getElementById('message-word').classList.remove('red');
    document.getElementById('text-user').value = '';
    printWord();
    document.getElementById('container').style.display = 'block';
    document.getElementById('defeat-main-container').style.display = 'none';
    document.getElementById('nav').style.display = 'flex';
    document.getElementById('main-container').style.display = 'flex';
    document.getElementById('start-game').style.display = 'none';
}

function view() {
    let userInput = document.getElementById('text-user').value;
    if (userInput.toLowerCase() == correctWord.toLowerCase() ) {
        document.getElementById('message-word').classList.add('green');
        document.getElementById('message-word').innerHTML = 'Congrats! word correct';
        wordCorrect.push(correctWord);
        score++;
        document.getElementById('score').innerHTML = 'Score: ' + score;
        startGame();
    } else {
        if (score <= 0) {
            document.getElementById('message-word').classList.add('red');
            document.getElementById('message-word').innerHTML = 'Sorry :(, your word is incorrect';
            document.getElementById('container').style.display = 'none';
            document.getElementById('defeat-main-container').style.display = 'flex';
            document.getElementById('table-word-correct').style.display = 'none';
        } else {
            document.getElementById('message-word').classList.add('red');
            document.getElementById('message-word').innerHTML = 'Sorry :(, your word is incorrect';
            document.getElementById('table-word').innerHTML = wordCorrect.join(' <span style="color: #000; padding: 1px 40px; border-bottom: 2px solid black; display: block;"></span> ');
            document.getElementById('container').style.display = 'none';
            document.getElementById('defeat-main-container').style.display = 'flex';
            newWordGame = [];
        }
    }
}

function restartGame() {
    try {
        console.log('restartGame was called');
        document.getElementById('message-word').innerHTML = 'Enter word';
        document.getElementById('message-word').classList.remove('green');
        score = 0;

        startGame();
    } catch (err) {
        console.log(err);
    }
}
