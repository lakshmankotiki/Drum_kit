var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        // switch (buttonHTML) {
        //     case "w":
        //         var audioW = new Audio("sounds/tom-1.mp3");
        //         audioW.play();
        //         break;
        //     case "a":
        //         var audioA = new Audio("sounds/tom-2.mp3");
        //         audioA.play();
        //         break;
        //     case "s":
        //         var audioS = new Audio("sounds/tom-3.mp3");
        //         audioS.play();
        //         break;
        //     case "d":
        //         var audioD = new Audio("sounds/tom-4.mp3");
        //         audioD.play();
        //         break;
        //     case "j":
        //         var audioJ = new Audio("sounds/crash.mp3");
        //         audioJ.play();
        //         break;
        //     case "k":
        //         var audioK = new Audio("sounds/kick-bass.mp3");
        //         audioK.play();
        //         break;
        //     case "l":
        //         var audioL = new Audio("sounds/snare.mp3");
        //         audioL.play();
        //         break;
        // }
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
        }
    });
}