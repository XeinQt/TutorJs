function userlogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "admin") {
    window.location.href = "welcome.html";
  } else if (username === "student" && password === "student") {
    window.location.href = "student.html";
  } else {
    alert("Incorrect passowrd or username");
  }
}
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  userlogin();
});

const ps = document.getElementById("showps");
const pass = document.getElementById("pass");

ps.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
  }
});
