
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


  function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  let modalIndex = 1;
  showModal(modalIndex); // Changed from modalSlider to showModal for consistency
  
  function plusModal(n) {
      showModal(modalIndex += n);
  }
  
  function currentModal(n) {
      showModal(modalIndex = n);
  }
  
  function showModal(n) {
      let slides = document.querySelectorAll(".sliderImg img");
      if (n > slides.length) {modalIndex = 1} // Loop to start
      if (n < 1) {modalIndex = slides.length} // Loop to end
      let modalImg = document.getElementById("expandedImg");
      modalImg.src = slides[modalIndex-1].src; // Set modal image to current slide
      modalImg.parentElement.style.display = "block"; // Show modal
  }