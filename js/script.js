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
  // Ambil semua tombol dan menu-card
  const buttons = document.querySelectorAll(".category-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target; // ambil id menu-card tujuan

      // Reset semua tombol & menu
      buttons.forEach(btn => btn.classList.remove("active"));
      menuCards.forEach(card => card.classList.remove("show"));

      // Aktifkan yang diklik
      button.classList.add("active");
      document.getElementById(target).classList.add("show");
    });
  });
});
