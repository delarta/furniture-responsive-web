let body = document.body;
let btnToggle = document.querySelector("#button-toggle");
let openMenu = document.querySelector("#open-menu");
let closeMenu = document.querySelector("#close-menu");
let menuElem = document.querySelector(".menus");

btnToggle.onclick = () => {
  if (body.classList.contains("light-mode")) {
    body.classList.replace("light-mode", "dark-mode");
  } else if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
  }
};

openMenu.onclick = () => {
  if (getComputedStyle(menuElem).display === "none") {
    menuElem.style.display = "flex";
  } else if (getComputedStyle(menuElem).display === "flex") {
    menuElem.style.display = "none";
  }
};

closeMenu.onclick = () => {
  if (getComputedStyle(menuElem).display === "none") {
    menuElem.style.display = "flex";
  } else if (getComputedStyle(menuElem).display === "flex") {
    console.log("clicked")
    menuElem.style.display = "none";
  }
};
