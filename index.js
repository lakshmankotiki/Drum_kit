/** Detecting mouse click events using DOM and event listeners */
var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
    //displaying all the elements which is having drum class
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //this get the current clickable element
        var buttonHTML = this.innerHTML;
        keyPressEventHandler(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}


/** Detecting keyboard press using DOM and event listeners */
document.addEventListener("keypress", function(event) {
    keyPressEventHandler(event.key);
});


/** function to handle all mouse clicks and keyboard press */
function keyPressEventHandler(key) {
    buttonAnimation(key);
    //Audio constructor use to play repsective mp3
    var audio = new Audio();
        switch (key) {
            case "w":
                audio.src = "sounds/tom-1.mp3";
                audio.play();
                break;
            case "a":
                audio.src = "sounds/tom-2.mp3";
                audio.play();
                break;
            case "s":
                audio.src = "sounds/tom-3.mp3";
                audio.play();
                break;
            case "d":
                audio.src = "sounds/tom-4.mp3";
                audio.play();
                break;
            case "j":
                audio.src = "sounds/crash.mp3";
                audio.play();
                break;
            case "k":
                audio.src = "sounds/kick-bass.mp3";
                audio.play();
                break;
            case "l":
                audio.src = "sounds/snare.mp3";
                audio.play();
                break;
            default:
                console.log(buttonHTML);
        }
}


/** function to apply animation when user click on buttons */
function buttonAnimation(buttonKey) {
    var activeButton = document.querySelector("."+buttonKey);
    activeButton.classList.add("pressed");
    //remove the css styles after clicking on buttons after 200ms
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}