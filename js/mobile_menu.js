const burgerIcon = document.getElementById('burger')
const navbarMenu = document.getElementById('nav-links')
burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})