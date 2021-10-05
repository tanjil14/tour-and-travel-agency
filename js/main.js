const searchBtn = document.getElementById("search-btn");
const searchBar = document.querySelector(".search-bar-container");
const formBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.querySelector("#form-close");
const menuBar = document.querySelector("#menu-bar");
const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  navbar.classList.remove("active");
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
