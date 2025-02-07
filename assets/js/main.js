function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let currentFeedbackIndex = 0; // Initialize with the first feedback

function showFeedback(direction) {
  const feedbackElements = document.querySelectorAll(".client-feedback");

  // Hide the current feedback
  feedbackElements[currentFeedbackIndex].style.display = "none";

  // Calculate the new index based on the direction
  if (direction === "next") {
    currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackElements.length;
  } else if (direction === "back") {
    currentFeedbackIndex =
      (currentFeedbackIndex - 1 + feedbackElements.length) %
      feedbackElements.length;
  }

  // Show the new feedback
  feedbackElements[currentFeedbackIndex].style.display = "block";
}

// JavaScript for Scroll Detection
// let lastScrollTop = 0;

// window.addEventListener("scroll", function () {
//   const topnav = document.querySelector(".topnav");
//   const menuItems = document.querySelector(".menu-items");
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > lastScrollTop) {
//     // Scrolling down
//     topnav.style.backgroundColor = "#744245"; // Restore original background color
//     menuItems.style.color = "#ffffff";
//   } else {
//     // Scrolling up
//     topnav.style.backgroundColor = ""; // Change background to black
//   }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
// });

// JavaScript for Slider Functionality
// let slideIndex = 0;

// function moveSlide(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   const slides = document.querySelectorAll(".slide");
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   const offset = -slideIndex * 100;
//   document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
// }

let slideIndex = 0;
let autoSlideInterval;

function moveSlide(n) {
  const slides = document.querySelectorAll(".slide");
  slideIndex += n;

  // Handle wrap-around for slide index
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Move slides
  const offset = -slideIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide
  }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto-slide when the page loads
startAutoSlide();

// Pause auto-slide when user interacts with the slider
const sliderContainer = document.querySelector(".slider-container");
sliderContainer.addEventListener("mouseenter", stopAutoSlide);
sliderContainer.addEventListener("mouseleave", startAutoSlide);
