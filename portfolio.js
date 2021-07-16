function welcome () {
  var welcomeText = document.getElementById('text')
  var infoLinks = document.getElementById('info-links')
  var aboutButton = document.getElementById('about-button')
  var projectsButton = document.getElementById('projects-button')
  var contactButton = document.getElementById('contact-button')
  var aboutSection = document.getElementById('about-me-section')
  var scrollableAboutSection = document.getElementById('scrollable-content')
  var coursesButton = document.getElementById('courses-link')
  var aboutReturnLink = document.getElementById('about-return-link')
  var courseDescription = document.getElementById('course-info')
  var aboutBackButton = document.getElementById('about-back-button')
  var contactSection = document.getElementById('contact-section')
  var contactBackButton = document.getElementById('contact-back-button')
  var bgPhoto = document.getElementsByClassName('bg-photo')[0]
  var squares = document.getElementsByClassName('lg-square')
  var circles = document.getElementsByClassName('sm-circle')

  welcomeText.onclick = function (event) {
    // event.preventDefault();
    welcomeText.style.display = 'none'
    // welcomeText.classList.add('animate__animated')
    // welcomeText.classList.add('animate__fadeOutDown')
    infoLinks.style.display = 'block'
  }

  aboutButton.onclick = function (event) {
    infoLinks.style.display = 'none'
    aboutSection.style.display = 'block'
    bgPhoto.style.transform = 'translate(30%,50%)'
    squares[0].style.display = 'none'
    squares[1].style.display = 'none'
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.display = 'none'
    }
  }

  coursesButton.onclick = function (event) {
    scrollableAboutSection.style.display = 'none'
    courseDescription.style.display = 'block'
  }

  aboutReturnLink.onclick = function (event) {
    scrollableAboutSection.style.display = 'block'
    courseDescription.style.display = 'none'
  }

  aboutBackButton.onclick = function (event) {
    aboutSection.style.display = 'none'
    infoLinks.style.display = 'block'
    bgPhoto.style.transform = 'translate(0,0)'
    squares[0].style.display = 'block'
    squares[1].style.display = 'block'
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.display = 'block'
    }
  }

  projectsButton.onclick = function (event) {
    window.open('https://github.com/beanpern?tab=repositories', '_blank')
  }

  contactButton.onclick = function (event) {
    infoLinks.style.display = 'none'
    contactSection.style.display = 'block'
    bgPhoto.style.transform = 'translate(30%,50%)'
    squares[0].style.display = 'none'
    squares[1].style.display = 'none'
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.display = 'none'
    }
  }

  contactBackButton.onclick = function (event) {
    contactSection.style.display = 'none'
    infoLinks.style.display = 'block'
    bgPhoto.style.transform = 'translate(0,0)'
    squares[0].style.display = 'block'
    squares[1].style.display = 'block'
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.display = 'block'
    }
  }
}
