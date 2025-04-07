
let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
} 

const loopSlideshow = setInterval(() => {
    plusSlides(1); // Move to the next slide
}, 6000);


let galIndex = 1;
showSlides(galIndex);


function plusGal(n) {
  showSlides(galIndex += n);
}

function currentGal(n) {
  showSlides(galIndex = n);
} 



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderImg");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
