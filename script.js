const openBtn = document.querySelector("#openbtn");
const closeBtn = document.querySelector("#closebtn");
const navList = document.querySelector(".nav-list");
openBtn.addEventListener("click", () => {
  navList.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navList.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
});
