import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";

const swiper = new Swiper(".swiper-container", {
  // Опції Swiper
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll events and trigger animations for elements in viewport
  function handleScroll() {
    document
      .querySelectorAll(".fade-in, .fade-in-top, .fade-in-left, .fade-in-right")
      .forEach(function (element) {
        if (isInViewport(element)) {
          element.classList.add("active");
        }
      });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events and trigger handleScroll function
  window.addEventListener("scroll", handleScroll);

  var element = document.querySelector(".nav_header");
  element.classList.remove("fixed");
  const headerElement = document.getElementsByClassName("info_header")[0];
  var topPos = headerElement.clientHeight;
  // console.log(topPos);
  window.addEventListener("scroll", function () {
    if (window.scrollY > topPos) {
      element.classList.add("fixed");
    } else if (window.scrollY <= topPos) {
      element.classList.remove("fixed");
    }
  });
});
