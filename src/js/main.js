window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contact)
}

const barActive = document.querySelector('.links')

barActive.addEventListener('mouseover', activateHover)

barActive.addEventListener('mouseleave', () => {
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(contact)
})

function activateHover(event) {
  const element = event.target

  if (element.tagName == 'A') {
    removeClassActive()
  }
}

function removeClassActive() {
  const links = document.querySelectorAll('.links li a')

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const endOfSection = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine >= endOfSection

  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionID = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  if (sectionBoudaries == true) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function showButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  reset: true,
  origin: 'bottom',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#about,
#about img,
#about .content
#services,
#services .card,
#testimonials,
#testimonials .testimony
#contact,
#contact .button,
#contact ul,
footer,
footer .social-media`)

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  setWrapperSize: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      setWrapperSize: true,
      mousewheel: false,
      keyboard: false
    }
  }
})
