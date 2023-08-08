var pokinatcha = "<img src=\"resources/albums/1.png\" width=\"150px\" height=\"150px\">";
var teenagePolitics = "<img src=\"resources/albums/2.png\" width=\"150px\" height=\"150px\">";
var lifeInGeneral = "<img src=\"resources/albums/3.png\" width=\"150px\" height=\"150px\">";
var slowlyGoing = "<img src=\"resources/albums/4.png\" width=\"150px\" height=\"150px\">";
var everPassing = "<img src=\"resources/albums/5.png\" width=\"150px\" height=\"150px\">";
var beforeEverything = "<img src=\"resources/albums/6.png\" width=\"150px\" height=\"150px\">";
var panic = "<img src=\"resources/albums/7.png\" width=\"150px\" height=\"150px\">";
var secretWeapon = "<img src=\"resources/albums/8.png\" width=\"150px\" height=\"150px\">";

var pickArr = [];
var pick2Arr = [];


function pick(alb1, alb2) {
    var album1 = document.getElementById(alb1);
    var album2 = document.getElementById(alb2);

    //var pickArr = [];
    

    if (pickArr.length === 0) {
        pickArr.push(alb1);
       
    } else if (pickArr.length === 1) {
        pickArr.splice(0, 1, alb1);
    }

    if(album1.style.visibility === "hidden" && album2.style.visibility === "hidden"){
        album1.style.visibility = "visible";
    }else if(album1.style.visibility === "visible" || album2.style.visibility === "visible"){
        album2.style.visibility = "hidden";
        album1.style.visibility = "visible";
    }else {
        album1.style.visibility = "visible";
    }
    
    
}

function pick2(alb1, alb2) {
    var album1 = document.getElementById(alb1);
    var album2 = document.getElementById(alb2);

    //var pickArr = [];
    

    if (pick2Arr.length === 0) {
        pick2Arr.push(alb1);
       
    } else if (pick2Arr.length === 1) {
        pick2Arr.splice(0, 1, alb1);
       
    }

    if(album1.style.visibility === "hidden" && album2.style.visibility === "hidden"){
        album1.style.visibility = "visible";
    }else if(album1.style.visibility === "visible" || album2.style.visibility === "visible"){
        album2.style.visibility = "hidden";
        album1.style.visibility = "visible";
    }else {
        album1.style.visibility = "visible";
    }
    
    
}


// function pick3(a, b, c, d) {
//     var album1 = pickArr[0];
//     var album2 = pick2Arr[0];
//     var newArr = [album1, album2];
//     // console.log(newArr);

//     var elem = document.getElementById('finalistone');


//     if (album1 === "fwin1") {
//         elem.innerHTML ="<img src=\"resources/albums/3.png\" width=\"150px\" height=\"150px\">";
//         // lifeInGeneral.style.visibility = "visible";
//         // beforeEverythingAndAfter.style.visibility = "hidden";
//         // everPassingMoment.style.visibility = "hidden";
//         // secretWeapon.style.visibility = "hidden";
//     } else if (album1 === "fwin2") {
//         elem.innerHTML ="<img src=\"resources/albums/6.png\" width=\"150px\" height=\"150px\">";
//         // beforeEverythingAndAfter.style.visibility = "visible";
//         // lifeInGeneral.style.visibility = "hidden";
//         // everPassingMoment.style.visibility = "hidden";
//         // secretWeapon.style.visibility = "hidden";
//     } else if (album2 === "fwin3") {
//         elem.innerHTML ="<img src=\"resources/albums/5.png\" width=\"150px\" height=\"150px\">";
//         // everPassingMoment.style.visibility = "visible";
//         // beforeEverythingAndAfter.style.visibility = "hidden";
//         // lifeInGeneral.style.visibility = "hidden";
//         // secretWeapon.style.visibility = "hidden";
//     } else if (album2 === "fwin4") {
//         elem.innerHTML ="<img src=\"resources/albums/8.png\" width=\"150px\" height=\"150px\">";
//         // secretWeapon.style.visibility = "visible";
//         // beforeEverythingAndAfter.style.visibility = "hidden";
//         // everPassingMoment.style.visibility = "hidden";
//         // lifeInGeneral.style.visibility = "hidden";
//     }

// }


function testPick() {
    var place = document.getElementById('finalistone');

    console.log(pickArr[0]);

    if (pickArr[0] = "fwin1") {  
        place.innerHTML = lifeInGeneral;
    }

    if (pickArr[0] = "fwin2") {
        place.innerHTML = beforeEverything;
    }
}



