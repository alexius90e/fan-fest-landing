const headerNav = document.querySelector('.header__nav');
const headerBurgerButton = document.querySelector('.header__burger-button');

if (headerNav && headerBurgerButton) {
  headerBurgerButton.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    headerNav.classList.toggle('active');
  });

  headerNav.addEventListener('click', (event) => {
    const isNavLink = event.target.classList.contains('header__nav-link');
    if (isNavLink) {
      event.currentTarget.classList.remove('active');
      headerBurgerButton.classList.toggle('active');
    }
  });
}
