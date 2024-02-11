const background = document.querySelector(".pic");
const audio1 = background.querySelector("audio");

if (audio1) {
  audio1.play();
  // setTimeout(() => {
  //   audio1.pause();
  // }, "40000");
} else {
  console.log("non");
}
var page1 = document.querySelector(".pic");
var myH1 = document.querySelector(".myH1");
var page2 = document.querySelector(".alpha");

myH1.addEventListener("click", function () {
  appearAlpha();
  console.log("hello");
});

function appearAlpha() {
  var DeathNote = document.querySelector(".myH1");
  var page1 = document.querySelector(".pic");
  var page2 = document.querySelector(".alpha");
  DeathNote.style.left = "0";
  setTimeout(function () {
    DeathNote.style.left = "-100%";
    page1.style.display = "none";
    page2.style.display = "block";
  }, 1500);
}

function appearPic() {
  var DeathNote = Document.querySelector(".myH1");
  var page1 = document.querySelector(".pic");
  var page2 = document.querySelector(".alpha");
  DeathNote.style.left = "0";
  setTimeout(function () {
    DeathNote.style.left = "-100%";
    page1.style.display = "block";
    page2.style.display = "none";
  }, 1500);
}

const Pic = document.querySelector(".MyImg");
const sugg = document.querySelector(".sugg");
const container = document.querySelector(".section");
const Bar = document.querySelector(".search");
const X = document.querySelector(".delete");
const mort = document.querySelector(".X");
const mybtn = document.querySelector(".mybtn");

Bar.addEventListener("click", handleClick);
function handleClick() {
  sugg.classList.toggle("active");
}

sugg.addEventListener("click", Onclick);
function Onclick() {
  container.classList.toggle("active");
}

X.addEventListener("click", click);
function click() {
  container.classList.toggle("active");
}

mybtn.addEventListener("click", clicki);
function clicki() {
  mort.classList.toggle("active");
}
