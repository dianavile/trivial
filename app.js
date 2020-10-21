/*jshint esversion: 6 */

let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let timeInterval;
let time = 5;
const iniciateTest = 1;

const questionary = [
    { 
    'question': 'How many noses does a slug have?',
        'answer': ['1', '2', '3', '4']
    //4= right
    },
       { 
    'question': 'Which animal can´t jump?',
    /*'img': './img/Elephant.png',*/
    /*'audio': './audio/Elephant.mp3',*/
    'answer': ['answerA', 'Elephant', 'answerD']
    },//Elephant B= right
    { 
    'question': 'What is the fastest land animal?',
    /*'img': './img/Cheetah.png',*/
    /*'audio': './audio/Elephant.mp3',*/
    'answer': ['Cheetah', 'answerC', 'answerD']
    },//Cheetah A= right
    { 
    'question': 'What is the fastest aquatic animal?',
    /*'img': './img/sailfish.png',*/
    /*'audio': './audio/sailfish.mp3',*/
    'answer': ['answerA', 'answerB','answerC', 'sailfish']
    },//Sailfish D= right
    { 
    'question': 'What is the sweet food made by bees?',
    /*'img': './img/honey.png',*/
    /*'audio': './audio/bees.mp3',*/
    'answer': ['Honey', 'Candy', 'Flowers', 'Polen']
    },//Honey A= right
    { 
    'question': 'How many legs does a lobster have?',
    /*'img': './img/lobster.png',*/
    /*'audio': './audio/count10.mp3',*/
    'answer': ['answerA', '10', 'answerD']
    },//10 B= right
    { 
    'question': 'What do you call a group of giraffes?',
    /*'img': './img/tower.png',*/
    /*'audio': './audio/giraffes.mp3',*/
    'answer': ['safari', 'tower', 'wildies', 'longtails']
    },//Tower B= right
    { 
    'question': 'Are worker bees male or female?',
    /*'img': './img/female.png',*/
    /*'audio': './audio/female.mp3',*/
    'answer': ['Male', 'Female']
    },//Female B= right
    { 
    'question': 'What color spots of a common ladybug have?',
    /*'img': './img/ladybug.png',*/
    /*'audio': './audio/ladybug.mp3',*/
    'answer': ['red', 'black', 'yellow','orange']
    },//Black B= right
    { 
    'question': 'Which animal looks like an orange big cat with black stripes?',
    /*'img': './img/tiger.png',*/
    /*'audio': './audio/tiger.mp3',*/
    'answer': ['tiger', 'cheetah', 'poema']
    },
];

const printHTMLQuestion = (i) => {
    currentQuestionIndex++;
    const q = questionary[i];
    let a = q.answers;
    rightAnswer = a[0];
    a = a.sort((a, b) => Math.floor(Math.random() * 3) - 1);

    const htmlAnswersArray = a.map(currentA => `<p><button onClick="evaluateAnswer('${currentA}',this)>X</button><span></span></p>`);
    const htmlAnswers = htmlAnswersArray.join('');
    let HTMLQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`;
    document.querySelector('question').innerHTML = HTMLQuestionCode;

    time = 5;
    document.querySelector('time').innerHTML = time;
    clearInterval(timeInterval);
    timeInterval = setInterval(() => {
        time--;
        if (time == 0) {
            alert("You lost :(");
            clearInterval(timeInterval);
        } else {
            alert("You win :)");
        }
    }, 1000);
};

const evaluateAnswer = (answer, obj) => {
    document.querySelectorAll('answer').forEach(a => a.classList.remove('right', 'wrong'));

    const parentP = obj.parentNode;
    console.log('answer: ' + answer + ', rightAnswer' + rightAnswer);
    if (answer == rightAnswer) {
        parentP.classList.add('right');
        rightAnswers++;
    } else {
        parentP.classList.add('wrong');
        wrongAnswers++;
    }
};

const nextQuestion = () => {
    
};

/* ERROR
const initiateTest() = {
    printHTMLQuestions(0);
    document.querySelector('.btnInitiate').style.display = 'none'; 
    document.querySelector('.mamotreto').style.display = 'block'; 
};*/



