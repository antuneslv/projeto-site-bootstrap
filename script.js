function linkOf() {
  const links = document.querySelectorAll('.nav-link')
  for (let a of links) {
    a.classList.remove('active')
  }
}

function linkOn(link) {
  linkOf()
  link.classList.add('active')
}

function standardLinkOn() {
  linkOf()
  document.querySelector('.nav-link').classList.add('active')
}
