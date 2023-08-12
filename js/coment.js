const inputArea = document.getElementById("new_comment");
const post = document.getElementById("post");
const main = document.getElementById("main");
post.addEventListener("click", function () {
  const newpera = document.createElement("p");
  newpera.innerText = inputArea.value;
  main.appendChild(newpera);
  inputArea.value = "";
});
