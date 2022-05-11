
/* ================== MOUSE CLICK ================== */
  
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
 
    document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
            
        let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);
 
        makeSound(classeNome);           
        mouseAnimation(classeNome);   
    });
 

    document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
        
        let classeNome = document.querySelectorAll(".drum")[i].className.slice(0,1);
        endMouseAnimation(classeNome);
    }); 
}
 

function mouseAnimation (key) {
  
    document.querySelectorAll("." + key)[0].classList.add("pressionado");
    document.querySelectorAll("." + key)[1].style.opacity = "1";
}
 
function endMouseAnimation (key) {
 
    document.querySelectorAll("." + key)[0].classList.remove("pressionado");
    document.querySelectorAll("." + key)[1].style.opacity = "0"; 
}




/* ================== KEYBOARD ================== */

document.addEventListener("keydown", function (event) {    
    makeSound(event.key.toLowerCase());       //key é uma property do objeto event
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


 






/*  VERSÃO CORRETA */


/* ================== MOUSE CLICK ================== */

/*
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
            
        if (this.innerHTML === "⎵") {
            makeSound(" ");            
            mouseAnimation(" ");   
        } else {
        makeSound(this.innerHTML.toLowerCase());
        mouseAnimation(this.innerHTML.toLowerCase());  
        }
    });
 
    document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
         
        if (this.innerHTML === "⎵") {  
            endMouseAnimation(" ");   
        } else { 
        endMouseAnimation(this.innerHTML.toLowerCase());           
        }
    }); 
}
 
function mouseAnimation (key) {
    if (key === " ") {
        document.querySelector(".space").classList.add("pressionado");
    } else {    
        document.querySelector("." + key).classList.add("pressionado");
    }
}
 
function endMouseAnimation (key) {
    if (key === " ") {
        document.querySelector(".space").classList.remove("pressionado");
    } else {    
    document.querySelector("." + key).classList.remove("pressionado");
    }
}




/* ================== KEYBOARD ================== */
/*
document.addEventListener("keydown", function (event) {    
    makeSound(event.key.toLowerCase());       //key é uma property do objeto event
    keyboardAnimation(event.key.toLowerCase());
    
});

document.addEventListener("keyup", function (event) {    
    endKeyboardAnimation(event.key.toLowerCase());
});


function keyboardAnimation (key) {
    if (key === "b" || key === "n" || key === " ") {
        document.querySelector(".space").classList.add("pressionado");
    } else {    
    document.querySelector("." + key).classList.add("pressionado");
    }
}

function endKeyboardAnimation (key) {
    if (key === "b" || key === "n" || key === " ") {
        document.querySelector(".space").classList.remove("pressionado");
    } else {    
    document.querySelector("." + key).classList.remove("pressionado");
    }
}


/* ================== SOUND ================== */
/*
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

        default: console.log(key);
            break;
    }


}


FIM VERSÃO CORRETA ----------- */


 











/* ------ FUNCIONA, PORÉM NÃO TIRA ANIMAÇÃO NO CLICK ------
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
         
        if (this.innerHTML === "⎵") {
            makeSound(" ");            
            mouseAnimation(" ");   
        } else {
        makeSound(this.innerHTML.toLowerCase());
        mouseAnimation(this.innerHTML.toLowerCase());           
        }
    });
}
*/



/*  FUNCIONA
document.querySelectorAll(".drum")[0].addEventListener("click", function () {
    alert("I got clickeeeed!");
    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();
});
*/