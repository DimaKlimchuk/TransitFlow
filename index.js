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
          console.log("class added");
        }
      });
  }

  // Initial check on page load
  handleScroll();

  // Listen for scroll events and trigger handleScroll function
  window.addEventListener("scroll", handleScroll);

  var originalTopPos;

  window.addEventListener("scroll", function () {
    var element = document.querySelector(".nav_header");
    var topPos = element.getBoundingClientRect().top;
    // console.log(window.scrollY);

    if (!originalTopPos) {
      originalTopPos = element.getBoundingClientRect().top; // Set the original top position when it's not already set
    }

    if (window.scrollY > originalTopPos) {
      element.classList.add("fixed");
    } else if (window.scrollY <= originalTopPos) {
      element.classList.remove("fixed");
    }
  });
});
