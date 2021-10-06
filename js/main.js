const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector(".search-bar-container");
const formBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.querySelector("#form-close");
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
const videoBtn = document.querySelectorAll(".vid-btn");
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
  navbar.classList.remove("active");
});
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  navbar.classList.remove("active");
});
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
menuBar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    const src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});

// custom slider
// const video = [
//   "images/vid-1.mp4",
//   "images/vid-2.mp4",
//   "images/vid-3.mp4",
//   "images/vid-4.mp4",
//   "images/vid-5.mp4",
// ];
// let videoIndex = 0;
// const videoElement = document.getElementById("video-slider");
// setInterval(() => {
//   if (videoIndex >= video.length) {
//     videoIndex = 0;
//   }
//   const videoUrl = video[videoIndex];
//   videoElement.setAttribute("src", videoUrl);
//   videoIndex++;
// }, 4000);
