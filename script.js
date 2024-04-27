function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
	loader.style.display = "none";
})
