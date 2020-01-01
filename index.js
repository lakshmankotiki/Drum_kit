/** DOM Event Listeners 
 * getting specific html elements using
 * DOM functions and adding click events and 
 * handling events by using handlers
*/
var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
    //displaying all the elements which is having drum class
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        var audio = new Audio();
        switch (buttonHTML) {
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
    });
}

/** captured the keybord press using keypress 
 * and handled using handler
 */
document.addEventListener("keypress", keyPressEventHandler);

function keyPressEventHandler(event) {
    var audio = new Audio();
    if(event.key === "w") {
        audio.src = "sounds/tom-1.mp3";
        audio.play();
    } else if(event.key === "a") {
        audio.src = "sounds/tom-2.mp3";
        audio.play();
    } else if(event.key === "s") {
        audio.src = "sounds/tom-3.mp3";
        audio.play();
    } else if(event.key === "d") {
        audio.src = "sounds/tom-4.mp3";
        audio.play();
    } else if(event.key === "j") {
        audio.src = "sounds/crash.mp3";
        audio.play();
    } else if(event.key === "k") {
        audio.src = "sounds/kick-bass.mp3";
        audio.play();
    } else if(event.key === "l") {
        audio.src = "sounds/snare.mp3";
        audio.play();
    }
}