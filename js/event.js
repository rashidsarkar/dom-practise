const myButton = document.getElementById("btn_update");
const inputFild = document.getElementById("input_fild");
const myParagrap = document.getElementById("input_display");

myButton.addEventListener("click", function () {
  const inputTExt = inputFild.value;
  myParagrap.innerText = inputTExt;
  inputFild.value = "";
});
