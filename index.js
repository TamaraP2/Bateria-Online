  
/* ====================================================== */
/* =================== RESPONSIVIDADE =================== */
/* ====================================================== */


function dimensoesDoConteudo () {    

    document.querySelector(".bateria").style.width = document.querySelector(".imagem-bateria").offsetWidth + "px";
    document.querySelector(".bateria").style.height = document.querySelector(".imagem-bateria").offsetHeight + "px";  
}


function responsividade () {

    if (window.innerHeight > window.innerWidth) {
        
        document.querySelector(".imagem-bateria").style.height = "auto"; 
        document.querySelector(".imagem-bateria").style.width = "80vw"; 
        document.querySelector("body").style.backgroundImage = "linear-gradient(90deg, rgba(0, 168, 232, 0.7), rgba(0, 23, 31, 0.9) ), url(images/drum-bg6.png)";     
    } 
  
}

window.onload = function() {
    responsividade();
    dimensoesDoConteudo();   
}

window.addEventListener('resize', function() { 
       
    window.location.reload(); 
}); 
 
 
 
/* ====================================================== */
/* ================== MOUSE ANIMATIONS ================== */
/* ====================================================== */ 


/*if ("ontouchstart" in document.documentElement) {
     
    for (let i = 0; i < document.querySelectorAll(".letras").length; i++) { 
        
        let parteBateria = document.querySelectorAll(".letras")[i].classList[0]; 

        document.querySelectorAll("." + parteBateria)[1].classList.add(parteBateria + "-touch"); 

        document.querySelectorAll(".letras")[i].addEventListener("touchstart", function () {
             
            document.querySelectorAll("." + parteBateria)[0].classList.add("letras-pressionadas");  
            makeSound(parteBateria);             
        });


        document.querySelectorAll(".letras")[i].addEventListener("touchend", function () {
 
            document.querySelectorAll("." + parteBateria)[0].classList.remove("letras-pressionadas");  
        }); 
 
    }
 
} else { 
*/
    for (let i = 0; i < document.querySelectorAll(".letras").length; i++) { 

        let parteBateria = document.querySelectorAll(".letras")[i].classList[0]; 

        document.querySelectorAll("." + parteBateria)[1].classList.add(parteBateria + "-mouse"); 

        document.querySelectorAll(".letras")[i].addEventListener("mousedown", function (event) {
   
            console.log(event);
            makeSound(event.target.classList[0]);
            startMouseAnimation(event.target.classList[0]);  
        });
     
        document.querySelectorAll(".letras")[i].addEventListener("mouseup", function (event) {

            endMouseAnimation(event.target.classList[0]); 
        }); 
    }
 
    function startMouseAnimation (key) {
 
        document.querySelectorAll("." + key)[0].classList.add("letras-pressionadas");     
        document.querySelectorAll("." + key)[1].style.opacity = "1";
        document.querySelectorAll("." + key)[1].classList.add(key + "-mouse"); 
    }
 
    function endMouseAnimation (key) {

        document.querySelectorAll("." + key)[0].classList.remove("letras-pressionadas");  
        document.querySelectorAll("." + key)[1].style.opacity = "0";  
    }

//}
 


/* ====================================================== */
/* ====================== KEYBOARD ====================== */
/* ====================================================== */ 


document.addEventListener("keydown", function (event) {    

    makeSound(event.key.toUpperCase());       
    keyboardAnimation(event.key.toUpperCase());
    
});

document.addEventListener("keyup", function (event) {    
    endKeyboardAnimation(event.key.toUpperCase());
});


function keyboardAnimation (key) {
     
    document.getElementById(key).classList.add("letras-pressionadas");
    document.getElementById(key).nextElementSibling.style.opacity = "1";  
} 

function endKeyboardAnimation (key) {

    document.getElementById(key).classList.remove("letras-pressionadas");
    document.getElementById(key).nextElementSibling.style.opacity = "0";  
}
 


/* ====================================================== */
/* ========================= MENU ======================= */
/* ====================================================== */
 

let x = 0; 

document.querySelector(".icone-menu").addEventListener("click", function () {
    
    x++;
     
    for (let i = 0; i < document.querySelectorAll(".letras").length; i = i + 2) {
  
        if (x % 2 !== 0) { 
            document.querySelectorAll(".letras")[i].style.opacity = "1"; 
        }
        else  {
            document.querySelectorAll(".letras")[i].style.opacity = "0"; 
        }
    }
       
    if (x % 2 !== 0) { 
        document.querySelector(".icone-config").style.display = "revert";
    }
    else  {
        document.querySelector(".icone-config").style.display = "none";  

    }  
});   


let y = 0;
 
document.querySelector(".icone-config").addEventListener("click", function () {

    for (let i = 0; i < 8; i++) {

        document.querySelectorAll(".novas-letras")[i].style.display = "revert";
    }

    x++;
     
    for (let i = 0; i < document.querySelectorAll(".letras").length; i = i + 2) {
   
        document.querySelectorAll(".letras")[i].style.opacity = "0";  
    }

    document.querySelector(".icone-salvar").style.display = "revert";  
    document.querySelector(".icone-close").style.display = "revert";  
    document.querySelector(".icone-menu").style.display = "none";  
    document.querySelector(".icone-config").style.display = "none";  
 
});
  


document.querySelector(".icone-close").addEventListener("click", function () {

    for (let i = 0; i < 8; i++) {
        document.querySelectorAll(".novas-letras")[i].style.display = "none";
    }

    
    for (let i = 0; i < document.querySelectorAll(".letras").length; i = i + 2) {
   
        document.querySelectorAll(".letras")[i].style.opacity = "0";  
    }

    document.querySelector(".icone-salvar").style.display = "none";  
    document.querySelector(".icone-close").style.display = "none";  
    document.querySelector(".icone-menu").style.display = "revert";  
    document.querySelector(".icone-config").style.display = "none";  

}); 



/* ====================================================== */
/* ========================= SALVAR ===================== */
/* ====================================================== */ 
 

let letrasBateria = ["Q", "W", "E", "R", "J", "K", "L", "B"];

document.querySelector(".icone-salvar").addEventListener("click", function () {
         
    novasLetras(); 
});  

  

/* ====================================================== */
/* =================== NOVAS LETRAS ===================== */
/* ====================================================== */ 
 

let primeiraClasse;
let ultimaClasse;
let vezesSalvas = 0; 
let novasLetrasBateria = [];

function novasLetras () { 
  
    let temLetrasIguais = false;

    let m = 0;  
 
    for (let i = 0; i < 8; i++) {  
        if (document.querySelectorAll(".novas-letras")[i].value === "") { 
            novasLetrasBateria[i] = document.querySelectorAll(".novas-letras")[i].placeholder.toUpperCase();   
        }
        else { 
            novasLetrasBateria[i] = document.querySelectorAll(".novas-letras")[i].value.toUpperCase();   
        }
    }

    for (let i = 0; i < 8; i++) {

        for (let j = i+1; j < 8; j++) {

            if (novasLetrasBateria[i] === novasLetrasBateria[j]) {
                console.log("letras iguais");
                alert("Não é possível escolher a mesma tecla para duas partes diferentes da bateria!")
                temLetrasIguais = true;
                break;
            }
        }

        if (temLetrasIguais === true) {
            break;
        }
    }

    if (temLetrasIguais === false) {

        for (let i = 0; i < 8; i++) {    

            document.querySelectorAll(".letras")[m].id = novasLetrasBateria[i]; 

            if (novasLetrasBateria[i] === " ") {
                document.getElementById(novasLetrasBateria[i]).innerHTML = "⎵";    
            }
            else {
            document.getElementById(novasLetrasBateria[i]).innerHTML = novasLetrasBateria[i];
            }
 
            letrasBateria[i] = novasLetrasBateria[i];
            
            console.log(letrasBateria);

            m = m + 2;   
        }  

        
        for (let i = 0; i < 8; i++) {
            document.querySelectorAll(".novas-letras")[i].style.display = "none";
        }

        
        for (let i = 0; i < document.querySelectorAll(".letras").length; i = i + 2) {
    
            document.querySelectorAll(".letras")[i].style.opacity = "1";  
        } 

        document.querySelector(".icone-salvar").style.display = "none";  
        document.querySelector(".icone-close").style.display = "none";  
        document.querySelector(".icone-menu").style.display = "revert";  
        document.querySelector(".icone-config").style.display = "none";  
        
        vezesSalvas++;
    }

    x = 1;
}

 

/* ====================================================== */
/* =============== REMOVING SOUND DELAY ================= */
/* ====================================================== */ 


let snare = new Audio('sounds/snare.mp3');
snare.volume = 0.001;
snare.play();   

let tom1 = new Audio('sounds/tom1.mp3');
tom1.volume = 0.001;
tom1.play();                

let tom2 = new Audio('sounds/tom2.mp3');
tom2.volume = 0.001;
tom2.play(); 

let surdo = new Audio('sounds/surdo.mp3');
surdo.volume = 0.001;
surdo.play(); 

let hi_hat_closed = new Audio('sounds/hihat.mp3');
hi_hat_closed.volume = 0.001;
hi_hat_closed.play(); 

let crash = new Audio('sounds/crash.mp3');
crash.volume = 0.001;
crash.play(); 

let ride = new Audio('sounds/ride.mp3');
ride.volume = 0.001;
ride.play(); 

let kick = new Audio('sounds/bumbo.mp3');
kick.volume = 0.001;
kick.play();  



/* ====================================================== */
/* ======================= SOUND ======================== */
/* ====================================================== */ 


function makeSound (key) { 
 
    if (letrasBateria[0] === key || key === "snare") {
        let snare = new Audio('sounds/snare.mp3');
        snare.play(); 
    }

    else if (letrasBateria[1] === key || key === "tom1") {
        let snare = new Audio('sounds/tom1.mp3');
        snare.play(); 
    }
 
    else if (letrasBateria[2] === key || key === "tom2") {
        let snare = new Audio('sounds/tom2.mp3');
        snare.play(); 
    } 
    
    else if (letrasBateria[3] === key || key === "surdo") {
        let snare = new Audio('sounds/surdo.mp3');
        snare.play(); 
    }
 
    else if (letrasBateria[4] === key || key === "hihat") {
        let snare = new Audio('sounds/hihat.mp3');
        snare.play(); 
    } 
    
    else if (letrasBateria[5] === key || key === "crash") {
        let snare = new Audio('sounds/crash.mp3');
        snare.play(); 
    }

    else if (letrasBateria[6] === key || key === "ride") {
        let snare = new Audio('sounds/ride.mp3');
        snare.play(); 
    }
 
    else if (letrasBateria[7] === key || key === "bumbo") {
        let snare = new Audio('sounds/bumbo.mp3');
        snare.play(); 
    } 

}
 
