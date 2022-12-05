window.onload = function () {

    async function fetchQuestions() {

        const response = await fetch(('https://api.jsonbin.io/v3/b/63847bc2a3c728450ed954c1?meta=false'), {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2b$10$cwaQJ/5tvKVQ7qtRl/jNPOaDwhRdayBU4ENJ0Pyix3wwUhOirs0Yy',
                'X-Bin-Meta':'false'

            },
        });
        const questions = await response.json();
        console.log(questions.record);
        return questions.record;
    }

    async function updateAnswers() {

        await fetch(('https://api.jsonbin.io/v3/b/63847bc2a3c728450ed954c1'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$cwaQJ/5tvKVQ7qtRl/jNPOaDwhRdayBU4ENJ0Pyix3wwUhOirs0Yy',

            },
            body: JSON.stringify(questions),
        })
            .then((response) => response.json())
            .then((questions) => {
                console.log('Success:', questions);
            });
    }


    let id = 0;
    let firstAnswerSelected = 0;
    let secondAnswerSelected = 0;
    let allAnswers = 0;

    let questions = [];

    async function renderQuestions(id) {
        console.log(questions.length);
        if(questions.length == 0) {
            questions = await fetchQuestions();
        }

        let firstPair = questions[id];
        document.getElementById('question-1-text').innerHTML = firstPair.firstQuestion;
        document.getElementById('question-2-text').innerHTML = firstPair.secondQuestion;
        firstAnswerSelected = firstPair.firstAnswerSelected;
        secondAnswerSelected = firstPair.secondAnswerSelected;
        allAnswers = firstAnswerSelected + secondAnswerSelected;
    }

    renderQuestions(id);


    let isSelected = false;

    var buttonNextQuestion = document.getElementById('nextQuestion');
    buttonNextQuestion.classList.add('hide-element');

    document.getElementById('question-1').addEventListener('click', function () {
        if(!isSelected) {
            this.classList.add('selected');
            buttonNextQuestion.classList.remove('hide-element');
            buttonNextQuestion.classList.add('show-element');
            isSelected = true;
            firstAnswerSelected++;
            allAnswers++;
            document.getElementById('percentage-1').innerHTML = toPercentage(firstAnswerSelected, allAnswers);
            document.getElementById('percentage-2').innerHTML = toPercentage(secondAnswerSelected, allAnswers);
            questions[id].firstAnswerSelected += 1;

        }
    });


    document.getElementById('question-2').addEventListener('click', function () {
        if(!isSelected) {
            this.classList.add('selected');
            buttonNextQuestion.classList.remove('hide-element');
            buttonNextQuestion.classList.add('show-element');
            isSelected = true;
            secondAnswerSelected++;
            allAnswers++;
            document.getElementById('percentage-1').innerHTML = toPercentage(firstAnswerSelected, allAnswers);
            document.getElementById('percentage-2').innerHTML = toPercentage(secondAnswerSelected, allAnswers);
            questions[id].secondAnswerSelected += 1;
        }
    });


    document.getElementById('nextQuestion').addEventListener('click', function () {
        console.log(questions.length);
        if(id > questions.length) {
            this.classList.remove('show-element');
            this.classList.add('hide-element');
            isSelected = false;
            id++;
            document.getElementById('percentage-1').innerHTML = '';
            document.getElementById('percentage-2').innerHTML = '';

            document.getElementById('question-1').classList.remove('selected');
            document.getElementById('question-2').classList.remove('selected');
            renderQuestions(id);
        }
        else {
            updateAnswers();
        }

    });
};


function toPercentage(thisAnswerCounter, allAnswersCounter) {
    let percentage = (thisAnswerCounter/allAnswersCounter) * 100;
    return Math.trunc(percentage.toString()) + '%';
}
