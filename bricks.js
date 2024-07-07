/* slide bar */
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const tnslider = tns({
  container: ".slider",
  slideBy: 1,
  speed: 7000,
  nav: true,
  navPosition: "bottom",
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayButtonOutput: false,
  controlsContainer: "#controls",
  prevButton: ".previous",
  nextButton: ".next",
});
