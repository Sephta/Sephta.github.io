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

contactInfo = document.getElementById("contact-info");
ci1 = document.getElementById("ci1");
ci2 = document.getElementById("ci2");
ci3 = document.getElementById("ci3");
ci4 = document.getElementById("ci4");

function openButton() {
    navContent.classList.toggle('show');
    b1.classList.toggle('x1');
    b2.classList.toggle('x2');
    b3.classList.toggle('x3');
    
    // if (ci1.classList.contains("show"))
    //     ci1.classList.toggle("show");
    // if (ci2.classList.contains("show"))
    //     ci2.classList.toggle("show");
    // if (ci3.classList.contains("show"))
    //     ci3.classList.toggle("show");
    // if (ci4.classList.contains("show"))
    //     ci4.classList.toggle("show");
}
function openContactInfo() {
    ci1.classList.toggle("show");
    ci2.classList.toggle("show");
    ci3.classList.toggle("show");
    ci4.classList.toggle("show");
}