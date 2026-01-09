console.log("JS TERBACA");

const buttons = document.querySelectorAll(".category-btn");
const menuCards = document.querySelectorAll(".menu-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target;

    menuCards.forEach(card => card.classList.remove("show"));
    buttons.forEach(b => b.classList.remove("active"));

    document.getElementById(target).classList.add("show");
    btn.classList.add("active");
  });
});
