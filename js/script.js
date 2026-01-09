// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika cafe menu diklik
document.querySelector('#cafe-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// ketik diluar sidebar untuk menghilangkan cafe-menu
const cafe = document.querySelector('#cafe-menu');

document.addEventListener('click', function(e){
    if(!cafe.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// refresh page
 if (window.location.hash) {
    window.location.replace(window.location.pathname);
  }

// button scroll
const scrollUpBtn = document.getElementById("scrollUpBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollUpBtn.classList.add("show"); // tampilkan tombol
    } else {
      scrollUpBtn.classList.remove("show"); // sembunyikan tombol
    }
  });

  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      buttons.forEach(btn => btn.classList.remove("active"));
      menuCards.forEach(card => card.classList.remove("show"));

      button.classList.add("active");

      const targetCard = document.getElementById(target);
      if (targetCard) {
        targetCard.classList.add("show");
      }
    });
  });
});

