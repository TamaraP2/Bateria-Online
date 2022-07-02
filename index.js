  
/* ================== RESPONSIVIDADE ================== */

function tamanhoDiv () {    

    document.querySelector(".bateria").style.width = document.querySelector(".drumkit").offsetWidth + "px";
    document.querySelector(".bateria").style.height = document.querySelector(".drumkit").offsetHeight + "px";  
}


function responsividade () {

    if (window.innerHeight > window.innerWidth) {
        
        document.querySelector(".drumkit").style.height = "auto"; 
        document.querySelector(".drumkit").style.width = "80vw";   
    } 
  
}

window.onload = function() {
    responsividade();
    tamanhoDiv();        
}

window.addEventListener('resize', function() { 
       
    location.reload(); 
}); 

   

/* ================== MENU ================== */
 
let x = 0; 

document.querySelector(".menu").addEventListener("click", function () {
        
    x++;

    for (let i = 0; i < document.querySelectorAll(".drum").length; i = i + 2) {

        if (x % 2 !== 0) {
            document.querySelectorAll(".drum")[i].style.opacity = "1";
        }
        else 
            document.querySelectorAll(".drum")[i].style.opacity = "0";
    }
        
}); 


/* ================== ANIMATION ================== */

function startAnimation (key) {
 
    document.querySelectorAll("." + key)[0].classList.add("pressionado");
    document.querySelectorAll("." + key)[1].style.opacity = "1";
}

function endAnimation (key) {

    document.querySelectorAll("." + key)[0].classList.remove("pressionado");
    document.querySelectorAll("." + key)[1].style.opacity = "0"; 
}



/* ================== MOBILE VERIFIER ================== */
 
if ("ontouchstart" in document.documentElement) {
     
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("touchstart", function () {

            let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);

            makeSound(classeNome);           
            startAnimation(classeNome);   
        });


        document.querySelectorAll(".drum")[i].addEventListener("touchend", function () {

            let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);
            endAnimation(classeNome);
        }); 
    }

 
    
} else {
   
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

        document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {

            let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);

            makeSound(classeNome);           
            startAnimation(classeNome);   
        });


        document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {

            let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);
            endAnimation(classeNome);
        }); 
    }

 
} 
 

/* ================== KEYBOARD ================== */

document.addEventListener("keydown", function (event) {    
    makeSound(event.key.toLowerCase());       
    keyboardAnimation(event.key.toLowerCase());
    
});

document.addEventListener("keyup", function (event) {    
    endKeyboardAnimation(event.key.toLowerCase());
});


function keyboardAnimation (key) {
     
    if (key === "b" || key === "n" || key === " ") {
        document.querySelectorAll(".s")[0].classList.add("pressionado");
        document.querySelectorAll(".s")[1].style.opacity = "1";
    } else {
        document.querySelectorAll("." + key)[0].classList.add("pressionado");
        document.querySelectorAll("." + key)[1].style.opacity = "1";
    }
}

function endKeyboardAnimation (key) {
    
    if (key === "b" || key === "n" || key === " ") {
        document.querySelectorAll(".s")[0].classList.remove("pressionado");
        document.querySelectorAll(".s")[1].style.opacity = "0";
    } else {    
        document.querySelectorAll("." + key)[0].classList.remove("pressionado");
        document.querySelectorAll("." + key)[1].style.opacity = "0";
    }
}

 

/* ================== REMOVING SOUND DELAY ON DESKTOP ================== */


let kick = new Audio('sounds/kick.mp3');
kick.volume = 0;
kick.play(); 



/* ================== SOUND ================== */

function makeSound (key) {

    let kick = new Audio('sounds/kick.mp3');

    switch (key) {
        
        case "q":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();    
            break;

        case "w":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();                
            break;

        case "e":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play(); 
            break;

        case "r":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play(); 
            break;

        case "j":
            let hi_hat_closed = new Audio('sounds/hi-hat-closed.mp3');
            hi_hat_closed.play(); 
            break;
        
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play(); 
            break;
        
        case "l":
            let ride = new Audio('sounds/ride.mp3');
            ride.play(); 
            break;

        case "b": 
            kick.play(); 
            break;

        case "n": 
            kick.play(); 
            break;

        case " ": 
            kick.play(); 
            break;
        
        case "s": 
            kick.play(); 
            break;

        default: console.log(key);
            break;
    } 

}



