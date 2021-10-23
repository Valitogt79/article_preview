// Grab DOM elements
const shareIcon = document.querySelector(".share__icon");
const tooltip = document.querySelector(".share__tooltip");
//Listen for click events
shareIcon.addEventListener("element.onmouseenter", () => {
  tooltip.classList.toggle("active");
});
