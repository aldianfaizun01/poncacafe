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

  // menu tab
  document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".category-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.target;

      // hilangkan active & show
      buttons.forEach(btn => btn.classList.remove("active"));
      menuCards.forEach(card => card.classList.remove("show"));

      // sembunyikan semua menu-items
      document.querySelectorAll(".menu-card .menu-items").forEach(item => {
        item.style.display = 'none';
      });

      // aktifkan menu baru
      button.classList.add("active");
      const targetCard = document.getElementById(target);
      if (targetCard) {
        targetCard.classList.add("show");
        showPage(1); // ❗ panggil pagination saat switch menu
      }
    });
  });
});


// pagination
const itemsPerPage = 4;
let currentPage = 1;

// ambil menu aktif
function getActiveMenu() {
  return document.querySelector('.menu-card.show');
}

// sembunyikan semua menu-items
function hideAllItems() {
  document.querySelectorAll('.menu-card .menu-items').forEach(item => {
    item.style.display = 'none';
  });
}

// tampilkan halaman tertentu
function showPage(page) {
  const menuCard = getActiveMenu();
  if (!menuCard) return;

  const items = menuCard.querySelectorAll('.menu-items');
  const totalPages = Math.ceil(items.length / itemsPerPage);
  currentPage = page;

  // sembunyikan semua item di menu aktif
  items.forEach(item => (item.style.display = 'none'));

  // tampilkan item sesuai halaman
  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  for (let i = start; i < end && i < items.length; i++) {
    items[i].style.display = 'block'; // 'block' lebih kompatibel dengan transform CSS
  }

  renderPagination(totalPages);
}

// render pagination
function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.onclick = () => showPage(i);
    pagination.appendChild(btn);
  }
}

// switch menu
function switchMenu(menuId) {
  // hapus show dari semua menu
  document.querySelectorAll('.menu-card').forEach(menu => menu.classList.remove('show'));

  // sembunyikan semua item
  hideAllItems();

  // aktifkan menu baru
  const activeMenu = document.getElementById(menuId);
  if (!activeMenu) return;
  activeMenu.classList.add('show');

  // tampilkan halaman pertama
  showPage(1);
}

// load awal
showPage(1);


