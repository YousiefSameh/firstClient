// Pagination In (Ideas Page)
const btns = document.querySelectorAll(".btns");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.toggle("active");
  });
});