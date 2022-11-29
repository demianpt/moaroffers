function mobileNav() {
  const btn = document.querySelector('.hamburger')

  btn.addEventListener('click', function() {
    btn.classList.toggle('open')
  })
}



addEventListener('DOMContentLoaded', () => {
  mobileNav()
});