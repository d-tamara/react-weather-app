window.onload = function () {

    async function fetchQuestions() {

        const response = await fetch(('Data/questions.json'), {
            method: 'GET',
        });
        const questions = await response.json();
        return questions;
    }

    async function renderQuestions() {
        const questions = await fetchQuestions();
        console.log(questions);
        let firstPair = questions[0];
        document.getElementById('question-1').innerHTML += firstPair.firstQuestion;
        document.getElementById('question-2').innerHTML += firstPair.secondQuestion;

        //questions.forEach(element => console.log(element));

        //console.log(questions.find(x => x.id ==='0'));

        //questions.forEach(element => document.getElementById('question-1').innerHTML += element.firstQuestion);
        //questions.forEach(element => document.getElementById('question-2').innerHTML += element.secondQuestion);

    }

    renderQuestions();


    var buttonNextQuestion = document.getElementById('nextQuestion');
    buttonNextQuestion.classList.add('hide-element');

    document.getElementById('question-1').addEventListener('click', function () {
        this.classList.add('selected');
        buttonNextQuestion.classList.remove('hide-element');
        buttonNextQuestion.classList.add('show-element');
    });
    document.getElementById('question-2').addEventListener('click', function () {
        this.classList.add('selected');
        buttonNextQuestion.classList.remove('hide-element');
        buttonNextQuestion.classList.add('show-element');
    });

};




