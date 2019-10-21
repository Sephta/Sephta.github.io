/*
Seth Tal
Button.js: a series of functions aimed towards animating various interactive
           elements of my website...
*/


function openNav() {
  var menu_icon = document.getElementById('menu-icon');

  document.getElementById('menu-nav').style.height = "10vh";
  document.getElementById('menu-close').style.height = "auto";

  menu_icon.style.transform = "translate(10000px)"
}

function closeNav() {
  var menu_icon = document.getElementById('menu-icon');

  document.getElementById('menu-nav').style.height = "0";
  document.getElementById('menu-close').style.height = "0";

  menu_icon.style.transform = "translate(0px)";
}
