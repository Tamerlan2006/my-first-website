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