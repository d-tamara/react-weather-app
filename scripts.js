window.onload = function () {

    let podnozje1 = document.getElementById('noge');
    let podnozje2 = document.getElementById('naslonjala');
    let chairImage = document.getElementById('chairImage');

    function selectOption(p1, p2, id1, id2) {
        p1.classList.remove('hide-element');
        p1.classList.add('show-element');
        p2.classList.add('hide-element');
        p2.classList.remove('show-element');
        p1.children[0].classList.remove('selected');
        p1.children[1].classList.remove('selected');
        chairImage.classList.add('hide-element');
        document.getElementById(id1).classList.add('selected');
        document.getElementById(id2).classList.remove('selected');
    }

    function showSelected(id1, id2, imageID) {
        document.getElementById(id1).classList.add('selected');
        document.getElementById(id2).classList.remove('selected');
        chairImage.classList.remove('hide-element');
        chairImage.src = imageID;
    }

    document.getElementById('podnozje-1').addEventListener('click', function () {
        selectOption(podnozje1, podnozje2, 'podnozje-1', 'podnozje-2');
        showSelected('noge-1', 'noge-2', './Data/main-a-1.png');
    });

    document.getElementById('podnozje-2').addEventListener('click', function () {
        selectOption(podnozje2, podnozje1, 'podnozje-2','podnozje-1');
        showSelected('naslonjalo-1', 'naslonjalo-2', './Data/main-b-1.png');
    });

    document.getElementById('noge-1').addEventListener('click', function () {
        showSelected('noge-1', 'noge-2', './Data/main-a-1.png');
    });

    document.getElementById('noge-2').addEventListener('click', function () {
        showSelected('noge-2', 'noge-1', './Data/main-a-2.png');
    });

    document.getElementById('naslonjalo-1').addEventListener('click', function () {
        showSelected('naslonjalo-1', 'naslonjalo-2', './Data/main-b-1.png');
    });

    document.getElementById('naslonjalo-2').addEventListener('click', function () {
        showSelected('naslonjalo-2', 'naslonjalo-1', './Data/main-b-2.png');
    });
};
