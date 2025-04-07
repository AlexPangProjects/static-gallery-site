
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
      var expandImg = document.getElementById("expandedImg");
      let classes = imgs.parentElement.classList; // Get classes from the parent (sliderImg or square)
      let imgClass = classes.contains("modal1") ? "modal1" : "modal2"; // Determine if from slider or gallery
  
      // Set the source and store the type
      expandImg.src = imgs.src;
      currentModalType = imgClass; // Store for use in showModal
  
      // Show the modal
      expandImg.parentElement.style.display = "block";
  }
  
  let modalIndex = 1;
  let currentModalType = "modal1"; // Default to slider images

  function plusModal(n) {
      showModal(modalIndex += n);
  }
  
  function currentModal(n) {
      showModal(modalIndex = n);
  }
  
  function showModal(n) {
      let modalImg = document.getElementById("expandedImg");
  
      // Select slides based on currentModalType
      let slides;
      if (currentModalType === "modal1") {
          slides = document.querySelectorAll(".modal1 img"); // Slider images
      } else {
          slides = document.querySelectorAll(".modal2 img"); // Gallery images
      }
  
      if (n > slides.length) { modalIndex = 1 } // Loop to start
      if (n < 1) { modalIndex = slides.length } // Loop to end
  
  
      modalImg.src = slides[modalIndex-1].src; // Set modal image
      modalImg.parentElement.style.display = "block"; // Show modal
  }