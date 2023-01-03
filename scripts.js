window.onload = function () {

    let legs = document.getElementById('legs');
    let backrest = document.getElementById('backrest');
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

    document.getElementById('base-1').addEventListener('click', function () {
        selectOption(legs, backrest, 'base-1', 'base-2');
        showSelected('legs-1', 'legs-2', './Data/main-a-1.png');
    });

    document.getElementById('base-2').addEventListener('click', function () {
        selectOption(backrest, legs, 'base-2','base-1');
        showSelected('backrest-1', 'backrest-2', './Data/main-b-1.png');
    });

    document.getElementById('legs-1').addEventListener('click', function () {
        showSelected('legs-1', 'legs-2', './Data/main-a-1.png');
    });

    document.getElementById('legs-2').addEventListener('click', function () {
        showSelected('legs-2', 'legs-1', './Data/main-a-2.png');
    });

    document.getElementById('backrest-1').addEventListener('click', function () {
        showSelected('backrest-1', 'backrest-2', './Data/main-b-1.png');
    });

    document.getElementById('backrest-2').addEventListener('click', function () {
        showSelected('backrest-2', 'backrest-1', './Data/main-b-2.png');
    });
};
