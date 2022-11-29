function mobileNav() {
  const btn = document.querySelector('.hamburger')
  const navItems = document.querySelector('.nav-items')

  btn.addEventListener('click', function() {
    btn.classList.toggle('open')
    navItems.classList.toggle('open')
  })
}



addEventListener('DOMContentLoaded', () => {
  mobileNav()
});