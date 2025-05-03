var myImage = document.querySelector("img");
myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/_MG_5974.JPG") {
        myImage.setAttribute("src", "images/20241013_191848.jpg");
    } else {
        myImage.setAttribute("src", "images/_MG_5974.JPG");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome, " + myName;
};

if (!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome, " + storedName;
};

myButton.onclick = function(){
    setUserName();
};

var albumCards = document.querySelectorAll(".album-card");
var modal = document.getElementById("modal");
var modalTitle = document.getElementById("modal-title");
var closeButton = document.querySelector(".close-button");

albumCards.forEach(function(card) {
    card.addEventListener("click", function(){
        var albumName = this.textContent;
        modalTitle.textContent = albumName;
        modal.style.display = "block";
    });
});

closeButton.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};