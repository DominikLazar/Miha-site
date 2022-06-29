const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("primary-navigation");

var sideNav = document.getElementById("primary-navigation");
var menuBtn = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
  const visibility = sideNav.getAttribute("data-visible");

  console.log(visibility);
  if (visibility === "false") {
    sideNav.setAttribute("data-visible", true);
    hamburger.setAttribute("aria-expanded", true);
    sideNav.style.transform = "translateX(0%)";
  } else if (visibility === "true") {
    sideNav.setAttribute("data-visible", false);
    hamburger.setAttribute("aria-expanded", false);
    sideNav.style.transform = "translateX(100%)";
  }
});

window.addEventListener("resize", reportWindowSize);

/*
menuBtn.onclick = function () {
  if (hamburger.classList == "hamburger is-active") {
    console.log("klik");
  } else {
    console.log("klik opet");
  }
};
  if (hamburger.classList == "hamburger is-active")
    sideNav.style.right = "-250px";
  else sideNav.style.right = "0px";

hamburger.addEventListener("click", () => {
  const visibility = sideNav.getAttribute("data-visible");
  console.log(visibility);
});
*/
