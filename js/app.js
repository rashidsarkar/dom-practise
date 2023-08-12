console.log("this is separete js file");
function makeRed() {
  document.body.style.backgroundColor = "red";
}
const makeBlueBtn = document.getElementById("make-blue");
const makePinkBtn = document.getElementById("make-pink");
const makePurleBtn = document.getElementById("make-purle");
const makeGreenBtn = document.getElementById("make-green");
console.log(makePinkBtn);
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

makeBlueBtn.onclick = makeBlue;
makePinkBtn.onclick = function makePink() {
  document.body.style.backgroundColor = "pink";
};
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
makePurleBtn.addEventListener("click", makePurple);
makeGreenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
const makeGoldenBtn = document
  .getElementById("Golden")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "gold";
  });
