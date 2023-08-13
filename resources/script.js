var pokinatcha = "<img src=\"resources/albums/1.png\" width=\"150px\" height=\"150px\">";
var teenagePolitics = "<img src=\"resources/albums/2.png\" width=\"150px\" height=\"150px\">";
var lifeInGeneral = "<img src=\"resources/albums/3.png\" width=\"150px\" height=\"150px\">";
var slowlyGoing = "<img src=\"resources/albums/4.png\" width=\"150px\" height=\"150px\">";
var everPassing = "<img src=\"resources/albums/5.png\" width=\"150px\" height=\"150px\">";
var beforeEverything = "<img src=\"resources/albums/6.png\" width=\"150px\" height=\"150px\">";
var panicCover = "<img src=\"resources/albums/7.png\" width=\"150px\" height=\"150px\">";
var secretWeapon = "<img src=\"resources/albums/8.png\" width=\"150px\" height=\"150px\">";

var pickArr = [];
var pick2Arr = [];
var pickArr3 = [];

// ROUND ONE FUNCTIONS
function lIG() {
    var place = document.getElementById('firstwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("beforeEverything")) {
        goat.innerHTML = " ";
    }

    if (firstFinalist.classList.contains("beforeEverything")) {
        firstFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = lifeInGeneral;
    place.classList.remove('beforeEverything');
    place.classList.add('lifeInGeneral');
}

function bEAF() {
    var place = document.getElementById('firstwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("lifeInGeneral")) {
        goat.innerHTML = " ";
    }

    if (firstFinalist.classList.contains("lifeInGeneral")) {
        firstFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = beforeEverything;
    place.classList.remove('lifeInGeneral');
    place.classList.add('beforeEverything');
}

function tEPM() {
    var place = document.getElementById('secondwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("secretWeapon")) {
        goat.innerHTML = " ";
    }

    if (firstFinalist.classList.contains("secretWeapon")) {
        firstFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = everPassing;
    place.classList.remove('secretWeapon');
    place.classList.add('everPassing');
}

function sW() {
    var place = document.getElementById('secondwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("everPassing")) {
        goat.innerHTML = " ";
    }

    if (firstFinalist.classList.contains("everPassing")) {
        firstFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = secretWeapon;
    place.classList.remove('everPassing');
    place.classList.add('secretWeapon');
}

function tP() {
    var place = document.getElementById('thirdwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("panic")) {
        goat.innerHTML = " ";
    }

    if (secondFinalist.classList.contains("panic")) {
        secondFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = teenagePolitics;
    place.classList.remove('panic');
    place.classList.add('teenagePolitics');
}

function panic() {
    var place = document.getElementById('thirdwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("teenagePolitics")) {
        goat.innerHTML = " ";
    }

    if (secondFinalist.classList.contains("teenagePolitics")) {
        secondFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = panicCover;
    place.classList.remove('teenagePolitics');
    place.classList.add('panic');
}

function sGTWOTB() {
    var place = document.getElementById('fourthwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("pokinatcha")) {
        goat.innerHTML = " ";
    }

    if (secondFinalist.classList.contains("pokinatcha")) {
        secondFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = slowlyGoing;
    place.classList.remove('pokinatcha');
    place.classList.add('slowlyGoing');
}

function pONA() {
    var place = document.getElementById('fourthwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("slowlyGoing")) {
        goat.innerHTML = " ";
    }

    if (secondFinalist.classList.contains("slowlyGoing")) {
        secondFinalist.innerHTML = " ";
    }

    place.innerHTML = " ";
    place.innerHTML = pokinatcha;
    place.classList.remove('slowlyGoing');
    place.classList.add('pokinatcha');
}

// ROUND TWO FUNCTIONS
function semiOne() {
    var place = document.getElementById('firstwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("everPassing") || goat.classList.contains("secretWeapon")) {
        goat.innerHTML = " ";
    }

    if (place.classList.contains("lifeInGeneral")) {
        firstFinalist.innerHTML = lifeInGeneral;
        firstFinalist.classList.remove('beforeEverything');
        firstFinalist.classList.remove('everPassing');
        firstFinalist.classList.remove('secretWeapon');
        firstFinalist.classList.add('lifeInGeneral');
    }

    if (place.classList.contains("beforeEverything")) {
        firstFinalist.innerHTML = beforeEverything;
        firstFinalist.classList.add('beforeEverything');
        firstFinalist.classList.remove('everPassing');
        firstFinalist.classList.remove('secretWeapon');
        firstFinalist.classList.remove('lifeInGeneral');
    }
    
}

function semiTwo() {
    var place = document.getElementById('secondwinner');
    var firstFinalist = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("lifeInGeneral") || goat.classList.contains("beforeEverything")) {
        goat.innerHTML = " ";
    }

    if (place.classList.contains("everPassing")) {
        firstFinalist.innerHTML = everPassing;
        firstFinalist.classList.remove('beforeEverything');
        firstFinalist.classList.add('everPassing');
        firstFinalist.classList.remove('secretWeapon');
        firstFinalist.classList.remove('lifeInGeneral');
    }

    if (place.classList.contains("secretWeapon")) {
        firstFinalist.innerHTML = secretWeapon;
        firstFinalist.classList.remove('beforeEverything');
        firstFinalist.classList.remove('everPassing');
        firstFinalist.classList.add('secretWeapon');
        firstFinalist.classList.remove('lifeInGeneral');
    }
    
}

function semiThree() {
    var place = document.getElementById('thirdwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("slowlyGoing") || goat.classList.contains("pokinatcha")) {
        goat.innerHTML = " ";
    }

    if (place.classList.contains("teenagePolitics")) {
        secondFinalist.innerHTML = teenagePolitics;
        secondFinalist.classList.add('teenagePolitics');
        secondFinalist.classList.remove('panic');
        secondFinalist.classList.remove('slowlyGoing');
        secondFinalist.classList.remove('pokinatcha');
    }

    if (place.classList.contains("panic")) {
        secondFinalist.innerHTML = panicCover;
        secondFinalist.classList.remove('teenagePolitics');
        secondFinalist.classList.add('panic');
        secondFinalist.classList.remove('slowlyGoing');
        secondFinalist.classList.remove('pokinatcha');
    }
    
}

function semiFour() {
    var place = document.getElementById('fourthwinner');
    var secondFinalist = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (goat.classList.contains("teenagePolitics") || goat.classList.contains("panic")) {
        goat.innerHTML = " ";
    }

    if (place.classList.contains("slowlyGoing")) {
        secondFinalist.innerHTML = slowlyGoing;
        secondFinalist.classList.remove('teenagePolitics');
        secondFinalist.classList.remove('panic');
        secondFinalist.classList.add('slowlyGoing');
        secondFinalist.classList.remove('pokinatcha');
    }

    if (place.classList.contains("pokinatcha")) {
        secondFinalist.innerHTML = pokinatcha;
        secondFinalist.classList.remove('teenagePolitics');
        secondFinalist.classList.remove('panic');
        secondFinalist.classList.remove('slowlyGoing');
        secondFinalist.classList.add('pokinatcha');
    }
    
}

//FINAL ROUND FUNCTIONS
function champOne() {
    var place = document.getElementById('finalistone');
    var goat = document.getElementById('goat');

    if (place.classList.contains("lifeInGeneral")) {
        goat.innerHTML = lifeInGeneral;
        goat.classList.add('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("beforeEverything")) {
        goat.innerHTML = beforeEverything;
        goat.classList.remove('lifeInGeneral');
        goat.classList.add('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("everPassing")) {
        goat.innerHTML = everPassing;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.add('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("secretWeapon")) {
        goat.innerHTML = secretWeapon;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.add('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }
}

function champTwo() {
    var place = document.getElementById('finalisttwo');
    var goat = document.getElementById('goat');

    if (place.classList.contains("teenagePolitics")) {
        goat.innerHTML = teenagePolitics;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.add('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("panic")) {
        goat.innerHTML = panicCover;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.add('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("slowlyGoing")) {
        goat.innerHTML = slowlyGoing;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.add('slowlyGoing');
        goat.classList.remove('pokinatcha');
    }

    if (place.classList.contains("pokinatcha")) {
        goat.innerHTML = pokinatcha;
        goat.classList.remove('lifeInGeneral');
        goat.classList.remove('beforeEverything');
        goat.classList.remove('everPassing');
        goat.classList.remove('secretWeapon');
        goat.classList.remove('teenagePolitics');
        goat.classList.remove('panic');
        goat.classList.remove('slowlyGoing');
        goat.classList.add('pokinatcha');
    }
}











