const toggleButton = document.getElementsByID('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('link-nav')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
} );
