var myImage = document.querySelector("img");
myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/actual life/_MG_5974.JPG") {
        myImage.setAttribute("src", "images/summer 2024/20241013_191848.jpg");
    } else {
        myImage.setAttribute("src", "images/actual life/_MG_5974.JPG");
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

const albumData = {
    "here and nowhere else": [
        "images/here and nowhere else/20250107_220517.jpg"
    ],
    "worm memories": [
        "images/worm memories/20241208_194327.jpg",
        "images/worm memories/20241208_194634.jpg",
        "images/worm memories/20241208_194822.jpg",
        "images/worm memories/20241208_194931.jpg"
    ],
    "summer 2024": [
        "images/summer 2024/20241013_191848.jpg",
        "images/summer 2024/20241015_235737.jpg",
        "images/summer 2024/20241016_001239 (2).jpg",
        "images/summer 2024/20241016_235822.jpg",
        "images/summer 2024/20241218_222833 (2).jpg"
    ],
    "actual life": [
        "images/actual life/_MG_5974.JPG"
    ],
    "autumn 2024": [
        "images/autumn 2024/20241006_215039.jpg",
        "images/autumn 2024/20241006_214926.jpg",
        "images/autumn 2024/20241006_215351.jpg",
    ]
};

const albumCards = document.querySelectorAll(".album-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImages = document.querySelector(".modal-images");
const closeButton = document.querySelector(".close-button");

albumCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const albumName = this.textContent;
        modalTitle.textContent = albumName;

        // Очистим старые изображения
        modalImages.innerHTML = "";

        // Добавим новые изображения
        if (albumData[albumName]) {
            albumData[albumName].forEach(function(imgSrc) {
                const img = document.createElement("img");
                img.src = imgSrc;
                img.alt = "Album photo";
                modalImages.appendChild(img);
            });
        }

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
