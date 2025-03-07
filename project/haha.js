// const index2 = document.getElementById("index2");

// index2.addEventListener("click", () => {
//   window.location.href = "index.html";
// });
//const number1 = document.getElementById("number1");
//const number2 = document.getElementById("number2");
const tots = document.getElementById("res");
const btn = document.getElementById("btn");

click.addEventListener("click", () => {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const tots = Number(number1) + Number(number2);
  console.log(tots);
  res.innerText = tots;
});
