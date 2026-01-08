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

  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }