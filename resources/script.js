
// function choice(alb1, alb2)
//     var album1 = document.getElementById(alb1);
//     var album2 = document.getElementById(alb2);


// function pick(alb1) {
//     var album1 = document.getElementById(alb1);


//     if(album1.style.visibility === "hidden"){
//         album1.style.visibility = "visible";
//     }else {
//         album1.style.visibility = "hidden";
//     }
// }


function pick(alb1, alb2) {
    var album1 = document.getElementById(alb1);
    var album2 = document.getElementById(alb2);


    if(album1.style.visibility === "hidden" && album2.style.visibility === "hidden"){
        album1.style.visibility = "visible";
    }else if(album1.style.visibility === "visible" || album2.style.visibility === "visible"){
        album2.style.visibility = "hidden";
        album1.style.visibility = "visible";
    }else {
        album1.style.visibility = "visible";
    }
}

// function pick(alb1, alb2) {
//     var album1 = document.getElementById(alb1);
//     var album2 = document.getElementById(alb2);


//     if(album1.style.visibility === "hidden" && album2.style.visibility === "hidden"){
//         album1.style.visibility = "visible";
//     }else if(album1.style.visibility === "visible"){
//         album1.style.visibility = "hidden";
//         album2.style.visibility = "visible";
//     }else if(album2.style.visibility === "visible"){
//         album2.style.visibility = "hidden";
//         album1.style.visibility = "visible";
//     } else {
//         album1.style.visibility = "hidden";
//     }
// }

