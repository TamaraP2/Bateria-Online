/* ================== RESPONSIVIDADE ================== */

function tamanhoDiv () {    

    document.querySelector(".bateria").style.width = document.querySelector(".drumkit").offsetWidth + "px";
    document.querySelector(".bateria").style.height = document.querySelector(".drumkit").offsetHeight + "px";  
}


function responsividade () {

    if (window.innerHeight > window.innerWidth) {
        
        document.querySelector(".drumkit").style.height = "auto"; 
        document.querySelector(".drumkit").style.width = "80vw"; 
        document.querySelector("body").style.backgroundImage = "linear-gradient(90deg, rgba(0, 168, 232, 0.7), rgba(0, 23, 31, 0.9) ), url(images/drum-bg6.png)";     
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

 

/* ================== MOBILE VERIFIER ================== */
 
if ("ontouchstart" in document.documentElement) {
     
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { 
        
        let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1); 

        document.querySelectorAll("." + classeNome)[1].classList.add(classeNome + "T"); 

        document.querySelectorAll(".drum")[i].addEventListener("touchstart", function () {
             
            document.querySelectorAll("." + classeNome)[0].classList.add("pressionado");  
            makeSound(classeNome);             
        });


        document.querySelectorAll(".drum")[i].addEventListener("touchend", function () {
 
            document.querySelectorAll("." + classeNome)[0].classList.remove("pressionado");  
        }); 
 
    }
 
} else {
   
    for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { 
        
        let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1); 

        document.querySelectorAll("." + classeNome)[1].classList.add(classeNome + "M");

        document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
 
            makeSound(classeNome);           
            startMouseAnimation(classeNome);   
        });


        document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {

            let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);
            endMouseAnimation(classeNome);
        }); 
    }

 
    function startMouseAnimation (key) {
 
        document.querySelectorAll("." + key)[0].classList.add("pressionado");     
        document.querySelectorAll("." + key)[1].style.opacity = "1";
    }
 
    function endMouseAnimation (key) {

        document.querySelectorAll("." + key)[0].classList.remove("pressionado");  
        document.querySelectorAll("." + key)[1].style.opacity = "0"; 
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

 

/* ================== REMOVING SOUND DELAY ================== */

let snare = new Audio('sounds/snare.mp3');
snare.volume = 0.001;
snare.play();   

let tom1 = new Audio('sounds/tom-1.mp3');
tom1.volume = 0.001;
tom1.play();                

let tom2 = new Audio('sounds/tom-2.mp3');
tom2.volume = 0.001;
tom2.play(); 

let surdo = new Audio('sounds/surdo.mp3');
surdo.volume = 0.001;
surdo.play(); 

let hi_hat_closed = new Audio('sounds/hi-hat-closed.mp3');
hi_hat_closed.volume = 0.001;
hi_hat_closed.play(); 

let crash = new Audio('sounds/crash.mp3');
crash.volume = 0.001;
crash.play(); 

let ride = new Audio('sounds/ride.mp3');
ride.volume = 0.001;
ride.play(); 

let kick = new Audio('sounds/kick.mp3');
kick.volume = 0.001;
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
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();                
            break;

        case "e":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play(); 
            break;

        case "r":
            let surdo = new Audio('sounds/surdo.mp3');
            surdo.play(); 
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
