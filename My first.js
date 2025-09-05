alert("Welcome to My To-Do List!");
let userName = prompt("What is your name?");
if (userName && userName.trim() !== "") {
  alert("Hello, " + userName + "! 😊 Good luck with my To-Do List!");
} else {
  alert("Hello, Guest! 😊 Good luck with my To-Do List!");
}