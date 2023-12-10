let currentSlide = 0;
let carousel = document.querySelector('.carousel-container');
let viewport = document.querySelector('.carousel-viewport');
let slides = document.getElementsByClassName("carousel-figure");
const formlabels = document.querySelectorAll("form>ul>li>label");
const forminputs = document.querySelectorAll("form>ul>li>input");


function showSlide(n) {
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length-1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[currentSlide].classList.add("active");
    translateViewport();
}

function translateViewport() {
    viewport.style.transform = `translateX(${-currentSlide * carousel.clientWidth}px)`;
}

function changeSlide(n) {
    showSlide(currentSlide += n);
}

showSlide(currentSlide);

function onFocusLabel(n){
    if (formlabels[n].style.opacity == 0){
        formlabels[n].style.opacity = 1;
    }
    formlabels[n].style.color = "#F9572E";
}

function onBlurLabel(n){
    if (forminputs[n].value == ""){
        formlabels[n].style.opacity = 0;
    } else {
        formlabels[n].style.color = "#666666";
    }
}

