let question1 = document.getElementById('question-1');
let question2 = document.getElementById('question-2');

question1.onclick = changeColor;
question2.onclick = changeColor;

function changeColor() {
    document.body.style.backgroundColor = "purple";
    return false;
}



    fetch('Data/questions.json')
        .then((response) => response.json())
        .then((questions) => console.log(questions));


