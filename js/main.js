/*
Seth Tal
02/13/2020
Main JS file ~ used on random elements on 
*/

nav = document.getElementById("nav-button-container");
navContent = document.getElementById("nav-container");
b1 = document.getElementById("bar-one");
b2 = document.getElementById("bar-two");
b3 = document.getElementById("bar-three");

let contactInfo = document.getElementById("contact-info");

function openButton() {
    navContent.classList.toggle('show');
    b1.classList.toggle('x1');
    b2.classList.toggle('x2');
    b3.classList.toggle('x3');
    
    if (contactInfo.classList.contains("show"))
        contactInfo.classList.toggle("show");
}

function openContactInfo() {
    contactInfo.classList.toggle("show");
}