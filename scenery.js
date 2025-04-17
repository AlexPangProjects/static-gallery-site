    
  function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    // Set the source and store the type
    expandImg.src = imgs.src;

    // Show the modal
    expandImg.parentElement.style.display = "block";
}

let modalIndex = 1;

function plusModal(n) {
    showModal(modalIndex += n);
}

function currentModal(n) {
    showModal(modalIndex = n);
}

function showModal(n) {
    let modalImg = document.getElementById("expandedImg");

    // Select slides based on currentModalType
    let slides = document.querySelectorAll(".modal2 img"); // Gallery images

    if (n > slides.length) { modalIndex = 1 } // Loop to start
    if (n < 1) { modalIndex = slides.length } // Loop to end


    modalImg.src = slides[modalIndex-1].src; // Set modal image
    modalImg.parentElement.style.display = "block"; // Show modal
}