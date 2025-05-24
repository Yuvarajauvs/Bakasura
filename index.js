function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Optional: Click anywhere outside the menu to close it
window.onclick = function (event) {
  var menu = document.getElementById("menu");
  if (!event.target.matches(".menu-icon")) {
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    }
  }
};
