document.addEventListener("DOMContentLoaded", function () {
  // Select all menu links
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section ID from the href attribute
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100, // Adjust 50px if there's a fixed navbar
          behavior: "smooth", // Enables smooth scrolling
        });
      }
    });
  });
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

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

// carousel slider
const buttons = document.querySelectorAll("[data-carousel-btn]");
const dots = document.querySelectorAll("[data-carousel-dot]");

function slide(button) {
  return () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slidesContainer = button
      .closest("[data-carousel]")
      .querySelector("[data-carousel-slides");
    const slides = slidesContainer.querySelectorAll("[data-carousel-slide]");
    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeSlideIndex = [...slides].indexOf(activeSlide);
    const nextSlideIndex = activeSlideIndex + offset;
    switch (nextSlideIndex) {
      case -1:
        moveDot(2)();
        break;
      case 1:
        moveDot(1)();
        break;
      case 2:
        moveDot(2)();
        break;
      default:
        moveDot(0)();
        break;
    }
    if (nextSlideIndex < 0) {
      slides[slides.length + nextSlideIndex].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    if (nextSlideIndex >= slides.length) {
      slides[0].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    slides[nextSlideIndex].dataset.active = true;
    return delete activeSlide.dataset.active;
  };
}

function moveDot(i) {
  return () => {
    const dot = dots[i];
    dots.forEach((d) => "active" in d.dataset && delete d.dataset.active);
    dot.dataset.active = true;
  };
}

window.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => button.addEventListener("click", slide(button)));
  setInterval(() => {
    slide(buttons[1])();
  }, 3500);
});

// Offers checkbox
document
  .getElementById("pricingToggle")
  .addEventListener("change", function () {
    const isChecked = this.checked;
    document.querySelectorAll(".price").forEach((price) => {
      const monthly = price.getAttribute("data-monthly");
      const yearly = price.getAttribute("data-yearly");
      price.innerHTML = isChecked ? `₹ ${yearly} /Yr` : `₹ ${monthly} /Yr`;
    });
  });

// Open Modal Function
function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

// Close Modal Function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
