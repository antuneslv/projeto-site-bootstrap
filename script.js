function linkOff() {
  const links = document.querySelectorAll('.nav-link')
  for (let a of links) {
    a.classList.remove('active')
  }
}

function linkOn(link) {
  linkOff()
  link.classList.add('active')
}

function standardLinkOn() {
  linkOff()
  document.querySelector('.nav-link').classList.add('active')
}
