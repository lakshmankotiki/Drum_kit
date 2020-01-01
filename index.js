var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
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