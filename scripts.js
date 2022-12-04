window.onload = function () {

    async function fetchQuestions() {

        const response = await fetch(('Data/questions.json'), {
            method: 'GET',
        });
        const questions = await response.json();
        return questions;
    }




    let id = 0;

    async function renderQuestions(id) {
        const questions = await fetchQuestions();
        console.log(questions);
        let firstPair = questions[id];
        document.getElementById('question-1').innerHTML += firstPair.firstQuestion;
        document.getElementById('question-2').innerHTML += firstPair.secondQuestion;

        //questions.forEach(element => console.log(element));

        //console.log(questions.find(x => x.id ==='0'));

        //questions.forEach(element => document.getElementById('question-1').innerHTML += element.firstQuestion);
        //questions.forEach(element => document.getElementById('question-2').innerHTML += element.secondQuestion);

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
        }
    });


    document.getElementById('question-2').addEventListener('click', function () {
        if(!isSelected) {
            this.classList.add('selected');
            buttonNextQuestion.classList.remove('hide-element');
            buttonNextQuestion.classList.add('show-element');
            isSelected = true;
        }
    });


    document.getElementById('nextQuestion').addEventListener('click', function () {
        this.classList.remove('show-element');
        this.classList.add('hide-element');
        isSelected = false;
        id++;
        document.getElementById('question-1').innerHTML = '';
        document.getElementById('question-2').innerHTML = '';
        renderQuestions(id);
    });

};




