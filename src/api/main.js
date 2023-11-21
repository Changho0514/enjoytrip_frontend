let mainText = document.querySelector("service-item");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);

  if (value > 490) {
    mainText.style.animation = "slide 2s ease-out";
  }
});
