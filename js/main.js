// Capture the primary-nav and the mobile-nav-toggle elements
const primaryNav = document.querySelector('#primary-nav');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

// Utilizing a custom attribute: "data-visible" to manage the state of the mobile navigation
// Utilizing aria-expanded for accessibility purposes

// Get the current value for the "data-visible" attribute (false by default)
  // If this value is false, change the respective attributes to "true" (show)
  // If this value is true, change the respective attributes to "false" (hide)
const changeVisibility = () => {
  const visibility = primaryNav.getAttribute('data-visible');   
  
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);  
    mobileNavToggle.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    mobileNavToggle.setAttribute('aria-expanded', false);
  }
}

mobileNavToggle.addEventListener('click', changeVisibility);