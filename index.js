function playSoundW(){
    let mySound = new Audio('./sounds/crash.mp3')
    mySound.play()
}
function playSoundA(){
    let mySound = new Audio('./sounds/kick-bass.mp3')
    mySound.play()
}
function playSoundS(){
    let mySound = new Audio('./sounds/snare.mp3')
    mySound.play()
}
function playSoundD(){
    let mySound = new Audio('./sounds/tom-1.mp3')
    mySound.play()
}
function playSoundJ(){
    let mySound = new Audio('./sounds/tom-2.mp3')
    mySound.play()
}
function playSoundK(){
    let mySound = new Audio('./sounds/tom-3.mp3')
    mySound.play()
}
function playSoundL(){
    let mySound = new Audio('./sounds/tom-4.mp3')
    mySound.play()
}
// alert("JS connected to HTML");
var nDrum = document.querySelectorAll(".drum").length;
for(var i=0;i<nDrum;i++){
    var func;
    switch(i){
        case 0: func = playSoundW; break;
        case 1: func = playSoundA; break;
        case 2: func = playSoundS; break;
        case 3: func = playSoundD; break;
        case 4: func = playSoundJ; break;
        case 5: func = playSoundK; break;
        default: func = playSoundL; break;
    }
    document.querySelectorAll(".drum")[i].addEventListener("click",func);
}
