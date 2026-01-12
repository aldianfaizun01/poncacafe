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

const itemsPerPage = 4;
let currentPage = 1;

function showPage(page) {
  const menuCard = document.querySelector('.menu-card.show');
  const items = menuCard.querySelectorAll('.menu-items');
  const totalPages = Math.ceil(items.length / itemsPerPage);

  currentPage = page;

  items.forEach((item, index) => {
    item.style.display =
      index >= (page - 1) * itemsPerPage &&
      index < page * itemsPerPage
        ? 'block'
        : 'none';
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    if (i === currentPage) btn.classList.add('active');
    btn.onclick = () => showPage(i);
    pagination.appendChild(btn);
  }
}

// pertama kali load
showPage(1);