function changeColor() {
    alert('test');
}

fetch('/Data/questions.json')
    .then((response) => response.json())
    .then((json) => console.log(json));