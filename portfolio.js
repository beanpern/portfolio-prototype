function welcome () {
  var welcomeText = document.getElementById('text')
  var infoLinks = document.getElementById('info-links')
  var aboutButton = document.getElementById('about-button')
  var projectsButton = document.getElementById('projects-button')
  var contactButton = document.getElementById('contact-button')
  var aboutSection = document.getElementById('about-me-section')
  var aboutBackButton = document.getElementById('about-back-button')
  var contactSection = document.getElementById('contact-section')
  var contactBackButton = document.getElementById('contact-back-button')
  var bgPhoto = document.getElementsByClassName('bg-photo')[0]

  welcomeText.onclick = function (event) {
    // event.preventDefault();
    welcomeText.style.display = 'none'
    infoLinks.style.display = 'block'
  }

  aboutButton.onclick = function (event) {
    infoLinks.style.display = 'none'
    aboutSection.style.display = 'block'
    bgPhoto.style.top = '30%'
    bgPhoto.style.left = '70%'
  }

  aboutBackButton.onclick = function (event) {
    aboutSection.style.display = 'none'
    infoLinks.style.display = 'block'
    bgPhoto.style.top = '13%'
    bgPhoto.style.left = '50%'
  }

  projectsButton.onclick = function (event) {
    window.open('https://github.com/beanpern?tab=repositories', '_blank')
  }

  contactButton.onclick = function (event) {
    infoLinks.style.display = 'none'
    contactSection.style.display = 'block'
    bgPhoto.style.top = '30%'
    bgPhoto.style.left = '70%'
  }

  contactBackButton.onclick = function (event) {
    contactSection.style.display = 'none'
    infoLinks.style.display = 'block'
    bgPhoto.style.top = '13%'
    bgPhoto.style.left = '50%'
  }
}
