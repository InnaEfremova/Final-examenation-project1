//-----------------MENU--------------//
let links = document.querySelectorAll('.menu a'),
ind = document.querySelector('.indicator');

links.forEach(item => {
item.addEventListener('mouseenter', (e) => {
moveInd(e.target);
});
});
function moveInd(el) {
    ind.style.width = `${el.offsetWidth}px`;
    ind.style.left = `${el.offsetLeft}px`;
}
//----------------//MENU----------------//

//----------------SLIDER----------------//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { 
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides"); 
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}  

//--------------//SLIDER----------------//