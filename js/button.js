function openNav() {
  document.getElementById('menu-nav').style.height = "10vh";
  document.getElementById('menu-close').style.height = "auto";
  document.getElementById('menu-icon').style.display = "none";
}

function closeNav() {
  document.getElementById('menu-nav').style.height = "0";
  document.getElementById('menu-close').style.height = "0";
  document.getElementById('menu-icon').style.display = "flex";
}
