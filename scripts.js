window.onload = function () {

    async function fetchQuestions() {

        const response = await fetch(('Data/questions.json'), {
            method: 'GET',
        });
        const questions = await response.json();
        return questions;
    }


    let id = 0;
    let firstAnswerSelected = 0;
    let secondAnswerSelected = 0;
    let allAnswers = 0;

    let questions = [];

    async function renderQuestions(id) {
        questions = await fetchQuestions();
        //console.log(questions);
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
            console.log(questions[id].firstAnswerSelected);
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
        this.classList.remove('show-element');
        this.classList.add('hide-element');
        isSelected = false;
        id++;
        document.getElementById('percentage-1').innerHTML = '';
        document.getElementById('percentage-2').innerHTML = '';

        document.getElementById('question-1').classList.remove('selected');
        document.getElementById('question-2').classList.remove('selected');
        renderQuestions(id);
    });
};


function toPercentage(thisAnswerCounter, allAnswersCounter) {
    let percentage = (thisAnswerCounter/allAnswersCounter) * 100;
    return Math.trunc(percentage.toString()) + '%';
}
