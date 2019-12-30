var buttonLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("Clicked......");
    });
}