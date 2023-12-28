function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  // Load the Lottie animation
  const animationContainer = document.getElementById("lottie-container");
  const animationData = {
    container: animationContainer,
    renderer: "svg", // You can use "canvas" or "html" based on your preference
    loop: true,
    autoplay: true,
    path: "namaste.json", // Replace with the path to your JSON animation file
  };

  // Play the animation
  const anim = lottie.loadAnimation(animationData);
});