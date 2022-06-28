const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".primary-navigation");

var sideNav = document.getElementById("primary-navigation");
var menuBtn = document.getElementById("hamburger");

menuBtn.onclick = function () {
  if (hamburger.classList == "is-active") {
    sideNav.style.transform = "translateX(0%)";
    console.log("klik");
  } else {
    sideNav.style.transform = "translateX(100%)";
    console.log("klik opet");
  }
};

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  if (hamburger.classList == "hamburger is-active")
    sideNav.style.right = "-250px";
  else sideNav.style.right = "0px";
});
