function playSoundW(){
    let mySound = new Audio('./sounds/tom-1.mp3')
    mySound.play()
}
function playSoundA(){
    let mySound = new Audio('./sounds/tom-2.mp3')
    mySound.play()
}
function playSoundS(){
    let mySound = new Audio('./sounds/tom-3.mp3')
    mySound.play()
}
function playSoundD(){
    let mySound = new Audio('./sounds/tom-4.mp3')
    mySound.play()
}
function playSoundJ(){
    let mySound = new Audio('./sounds/snare.mp3')
    mySound.play()
}
function playSoundK(){
    let mySound = new Audio('./sounds/crash.mp3')
    mySound.play()
}
function playSoundL(){
    let mySound = new Audio('./sounds/kick-bass.mp3')
    mySound.play()
}
// alert("JS connected to HTML");
var nDrum = document.querySelectorAll(".drum").length;
for(var i=0;i<nDrum;i++){
    // clicking wach button should fire function to play respective sound..
    document.querySelectorAll(".drum")[i].addEventListener("click",function(event){
        makeSound(this.innerHTML);
        btnAnim(this.innerHTML);
    });
}

// event listener for playing sound if any keyboard key is pressed;
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    btnAnim(event.key);
});
function makeSound(key){
    switch(key){
        case 'w': playSoundW(); break;
        case 'a': playSoundA(); break;
        case 's': playSoundS(); break;
        case 'd': playSoundD(); break;
        case 'j': playSoundJ(); break;
        case 'k': playSoundK(); break;
        case 'l': playSoundL(); break;
        default:  break;
    }
}
function btnAnim(currentKey){
    var action = document.querySelector("."+currentKey);
    action.classList.add("pressed");
    setTimeout(function(){
        action.classList.remove("pressed");
    },200);
}
